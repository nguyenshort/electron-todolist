# electron-vite-vue

đĨŗ Really simple `Electron` + `Vue` + `Vite` boilerplate.

[![awesome-vite](https://awesome.re/mentioned-badge.svg)](https://github.com/vitejs/awesome-vite)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ae3863e3-1aec-4eb1-8f9f-1890af56929d/deploy-status)](https://app.netlify.com/sites/electron-vite/deploys)
![GitHub license](https://img.shields.io/github/license/caoxiemeihao/electron-vite-vue?style=flat)
![GitHub stars](https://img.shields.io/github/stars/caoxiemeihao/electron-vite-vue?color=fa6470&style=flat)
![GitHub forks](https://img.shields.io/github/forks/caoxiemeihao/electron-vite-vue?style=flat)

English | [įŽäŊä¸­æ](README.zh-CN.md)

## Features

đĻ Out of the box  
đ¯ Based on [vue-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-vue-ts) template, less invasive  
đą Extensible, really simple directory structure  
đĒ Support using Node.js API in Renderer-process  
đŠ Support C/C++ native addons  
đĨ It's easy to implement multiple windows  

## Quick Start

```sh
npm create electron-vite
```

<!-- [![quick-start](https://asciinema.org/a/483731.svg)](https://asciinema.org/a/483731) -->

![electron-vite-vue.gif](https://github.com/electron-vite/electron-vite-vue/blob/main/public/electron-vite-vue.gif?raw=true)

## Debug

![electron-vite-react-debug.gif](https://github.com/electron-vite/electron-vite-react/blob/main/public/electron-vite-react-debug.gif?raw=true)

## Directory

```diff
+ âââŦ electron
+ â âââŦ main
+ â â âââ index.ts    entry of Electron-main
+ â âââŦ preload
+ â   âââ index.ts    entry of Electron-preload
  âââŦ src
  â âââ main.ts       entry of Electron-renderer
  âââ index.html
  âââ package.json
  âââ vite.config.ts
```

## Examples

Used in Main-process đ [electron-vite-boilerplate](https://github.com/caoxiemeihao/electron-vite-boilerplate)

Used in Renderer-process đ [electron-vite-boilerplate/tree/nodeIntegration](https://github.com/caoxiemeihao/electron-vite-boilerplate/tree/nodeIntegration)

> List the modules you may use as far as possible
###### ES Modules

- [execa](https://www.npmjs.com/package/execa)
- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [file-type](https://www.npmjs.com/package/file-type)

###### Native Addons(C/C++)

- [sqlite3](https://www.npmjs.com/package/sqlite3)
- [serialport](https://www.npmjs.com/package/serialport)
