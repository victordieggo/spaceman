# Spaceman

Spaceman is a simple and easily customizable HTML/CSS boilerplate to build websites and apps. It provides a flexbox based responsive layout system, pre-set styles for basic UI elements and a few CSS utilities and components.

### Getting Started

[Download Spaceman](https://github.com/victordieggo/spaceman/releases/latest) and extract all files into the root directory of your project. The build system is based on [Gulp](#build-tools) and [Webpack](https://webpack.js.org/), so you'll need [Node.JS](https://nodejs.org/en/) installed first. Once you have set it up, access the bash/terminal/command line:

```
# install gulp globally
$ npm install -g gulp

# go to your project directory
$ cd myproject

# install dev dependencies
$ npm install

# start the development server at localhost:3000
$ npm run dev
```

To summarize, the `gulpfile.js` located in the project root does the following:

* Optimize SVGs and images
* Compile, minify, autoprefix and lint Sass files
* Use Webpack to compile, concatenate, minify, and lint JavaScript
* Watch files for changes, rebuild everything and reload all browsers

### Browser Support

Chrome 29+, IE 10+, Firefox 22+, Safari 6.1+, Opera 12+

### Thanks

[![BrowserStack](https://victordiego.com/browserstack-logo.jpg)](https://www.browserstack.com)

This project is supported by the [BrowserStack](https://www.browserstack.com) open source program, which provides free testing across multiple devices and browsers.

### License

[MIT License](https://victordieggo.mit-license.org/) © [Victor Diego Villar Guimarães](https://victordiego.com)
