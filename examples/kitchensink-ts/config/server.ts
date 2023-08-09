import { Config } from '@strapi/strapi';

const serverConfig: Config.Server = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['toBeModified1', 'toBeModified2']),
  },
});

export default serverConfig;
