"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7994],{5170:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(3117),o=(r(7294),r(3905));const s={title:"usePersistentState",description:"API reference for the usePersistentState hook in Strapi",tags:["hooks","helper-plugin"]},a=void 0,i={unversionedId:"docs/core/helper-plugin/hooks/use-persistent-state",id:"docs/core/helper-plugin/hooks/use-persistent-state",title:"usePersistentState",description:"API reference for the usePersistentState hook in Strapi",source:"@site/docs/docs/01-core/helper-plugin/hooks/use-persistent-state.mdx",sourceDirName:"docs/01-core/helper-plugin/hooks",slug:"/docs/core/helper-plugin/hooks/use-persistent-state",permalink:"/docs/core/helper-plugin/hooks/use-persistent-state",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/helper-plugin/hooks/use-persistent-state.mdx",tags:[{label:"hooks",permalink:"/tags/hooks"},{label:"helper-plugin",permalink:"/tags/helper-plugin"}],version:"current",frontMatter:{title:"usePersistentState",description:"API reference for the usePersistentState hook in Strapi",tags:["hooks","helper-plugin"]},sidebar:"docs",previous:{title:"useFocusInputField",permalink:"/docs/core/helper-plugin/hooks/use-focus-input-field"},next:{title:"Event Hub",permalink:"/docs/core/strapi/event-hub"}},p={},l=[{value:"Usage",id:"usage",level:2},{value:"Typescript",id:"typescript",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a easily usable hook to store data on the local storage."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { usePersistentState } from '@strapi/helper-plugin';\n\nconst MyComponent = () => {\n  const [navbarOpened, setNavbarOpened] = usePersistentState('navbar-open', true);\n\n  return <nav>{navbarOpened ? <div>My menu!</div> : null}</nav>;\n};\n")),(0,o.kt)("h2",{id:"typescript"},"Typescript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function usePersistentState<T>(key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>];\n")))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,h=d["".concat(p,".").concat(f)]||d[f]||u[f]||s;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);