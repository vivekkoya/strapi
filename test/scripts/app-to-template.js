'use strict';

const path = require('path');
const fs = require('fs-extra');
const yargs = require('yargs');

// Copy files and directories from source to destination
async function copyWithFilter(source, destination, filterFunction) {
  const files = await fs.readdir(source);
  console.log('files', files);
  for (const file of files) {
    const sourcePath = path.join(source, file);
    const destPath = path.join(destination, file);

    const isAllowed = await filterFunction(file, sourcePath, destPath);

    // Ensure the destination directory exists
    await fs.ensureDir(destination);

    if (isAllowed) {
      console.log(sourcePath, 'is Allowed');
      if ((await fs.stat(sourcePath)).isDirectory()) {
        await fs.ensureDir(destPath);
        // await copyWithFilter(sourcePath, destPath, filterFunction);
        await fs.copy(sourcePath, destPath);
      } else {
        await fs.copyFile(sourcePath, destPath);
      }
    }
  }
}

yargs
  .parserConfiguration({
    /**
     * This lets us pass any other arguments to the test runner
     * e.g. the name of a specific test or the project we want to run
     */
    'unknown-options-as-args': true,
  })
  .command({
    command: '*',
    description: 'convert a full Strapi project to a template',
    async builder(yarg) {
      yarg.option('source', {
        alias: 's',
        describe: 'Number of concurrent test domains to run',
        type: 'string',
        default: '.', // Set the default value to the current directory
      });

      yarg.option('destination', {
        alias: 'd',
        describe: 'Run a specific test suite domain',
        type: 'string',
        demandOption: 'Please provide a destination', // Make destination a required option
      });

      yarg.option('force', {
        describe: 'For conversion (delete destination if it already exists)',
        type: 'boolean',
        default: false, // Set the default value to false
      });

      // TODO: add option to copy the sqlite database to the template /data folder

      // TODO: add a script (maybe not here) to that template that looks in /data and copies it to
    },
    async handler(argv) {
      const { source, destination, force } = argv;

      // List of files to include in the copy
      const allowFile = Symbol('allowFile');
      const allowChildren = Symbol('allowChildren');
      const allowedTemplateContents = {
        'README.md': allowFile,
        '.env.example': allowFile,
        'package.json': allowFile,
        src: allowChildren,
        data: allowChildren,
        database: allowChildren,
        public: allowChildren,
        scripts: allowChildren,
      };

      const filterTemplateContents = async (src, dest) => {
        console.log('file', src, dest);
        const allowedContent = allowedTemplateContents[src];

        if (allowedContent === allowFile) {
          // Check if it's a file
          const isFile = (await fs.stat(path.join(source, src))).isFile();
          return isFile;
        }
        if (allowedContent === allowChildren) {
          // Check if it's a directory
          const isDirectory = (await fs.stat(path.join(source, src))).isDirectory();
          return isDirectory;
        }

        // Default to excluding the file if it doesn't match allowFile or allowChildren
        return false;
      };

      try {
        // Check if the destination directory exists
        const destinationExists = await fs.pathExists(destination);

        if (destinationExists) {
          // Check if any files in the list already exist in the destination
          const existingFiles = await Promise.all(
            Object.keys(allowedTemplateContents).map(async (file) => {
              const filePath = path.join(destination, file);
              return {
                file,
                exists: await fs.pathExists(filePath),
              };
            })
          );

          const anyFilesExist = existingFiles.some((file) => file.exists);

          if (anyFilesExist) {
            if (force) {
              // Delete the contents of the destination folder
              await fs.emptyDir(destination);
              console.log('Contents of the destination folder deleted.');
            } else {
              throw new Error(
                'Files already exist in the destination. Use --force to remove them and overwrite.'
              );
            }
          }
        }

        const sourceAbsolutePath = path.resolve(process.cwd(), source);
        const destinationAbsolutePath = path.resolve(process.cwd(), destination);

        await copyWithFilter(sourceAbsolutePath, destinationAbsolutePath, filterTemplateContents);

        console.log('Files copied successfully!');
      } catch (error) {
        console.error('Error copying files:', error.message);
      }
    },
  })
  .help()
  .parse();
