if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/4-03502de829d6f4bfb641.js",revision:"h6H08ILD-OaZlhwJtN29q"},{url:"/_next/static/chunks/785-09f09fea6fc0b794ef07.js",revision:"h6H08ILD-OaZlhwJtN29q"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"h6H08ILD-OaZlhwJtN29q"},{url:"/_next/static/chunks/main-618b2766132fcb84cc35.js",revision:"h6H08ILD-OaZlhwJtN29q"},{url:"/_next/static/chunks/pages/404-b6d7a8619ccb0b921482.js",revision:"h6H08ILD-OaZlhwJtN29q"},{url:"/_next/static/chunks/pages/_app-1ff0ae517a6ed2a453d0.js",revision:"h6H08ILD-OaZlhwJtN29q"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"h6H08ILD-OaZlhwJtN29q"},{url:"/_next/static/chunks/pages/fallback-2abce9e3d80a72db69d7.js",revision:"h6H08ILD-OaZlhwJtN29q"},{url:"/_next/static/chunks/pages/index-fef36d14d08efacdac51.js",revision:"h6H08ILD-OaZlhwJtN29q"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"h6H08ILD-OaZlhwJtN29q"},{url:"/_next/static/chunks/webpack-fb76148cfcfb42ca18eb.js",revision:"h6H08ILD-OaZlhwJtN29q"},{url:"/_next/static/h6H08ILD-OaZlhwJtN29q/_buildManifest.js",revision:"h6H08ILD-OaZlhwJtN29q"},{url:"/_next/static/h6H08ILD-OaZlhwJtN29q/_ssgManifest.js",revision:"h6H08ILD-OaZlhwJtN29q"},{url:"/icons/apple-touch-icon.png",revision:"a3eb89d766396a1e9b915fb57268794d"},{url:"/icons/favicon.ico",revision:"53e645319c7f872349c51e22df40df50"},{url:"/icons/icon-192x192.png",revision:"5c9253976ad67715f7061348fcbac41f"},{url:"/icons/icon-256x256.png",revision:"240bc6cb05139d056407aca4d885e1ac"},{url:"/icons/icon-384x384.png",revision:"7e82e18d407a5ee6b462a9675f475de0"},{url:"/icons/icon-512x512.png",revision:"40aa2426e7e4019f9ad991e0665a2e2a"},{url:"/images/imsamad.jpeg",revision:"08492443c8c0e1bbab7918805a49479e"},{url:"/images/work/ecart.png",revision:"f8c47642af3faaa8405109962fd3ca4e"},{url:"/images/work/work1.jpg",revision:"191feb907d94a0993009182be5d1418a"},{url:"/images/work/work2.jpg",revision:"b855399263e7984f81521116704125b1"},{url:"/images/work/work3.jpg",revision:"27dc07a4f0d8b0cc088598f58cd3d94e"},{url:"/images/work/work4.jpg",revision:"09b0176f1df222939a6e3a48454a43db"},{url:"/images/work/work5.jpg",revision:"0087a913655292fe673c3b2e5dce289f"},{url:"/images/work/work6.jpg",revision:"056c87aa6f9e07cdcdbae27cf7651133"},{url:"/manifast.json",revision:"24516062656dffa24cb8b66b2a0aa1e2"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
