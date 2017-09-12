# Spaceman #

Spaceman is a simple and easily customizable HTML/CSS boilerplate to build websites and apps. It provides a flexbox based responsive layout system, pre-set styles for buttons, forms, typography and basic elements, CSS utilities to speed up development and a basic starter theme.

### Getting Started ###

Spaceman uses Gulp and Browsersync, which run throught NodeJS. You might wanna know about them before we start:

- [NodeJS](https://nodejs.org/en/)
- [Gulp](http://gulpjs.com/)
- [Browsersync](https://www.browsersync.io/)

[Download Spaceman](https://github.com/victordieggo/spaceman/releases/latest) to your project directory then get on the command line:

```
# install gulp globally
$ npm install -g gulp

# go to your project directory
$ cd myproject

# install dev dependencies:
$ npm install

# run gulp and engage into hyperspace:
$ gulp
```

### Gulp Tasks ###

- `gulp`: run all tasks and start browsersync
- `gulp css`: combine all css files/media queries and minify the generated file
- `gulp js`: combine all js files and minify the generated file
- `gulp img`: compress images
- `gulp svg`: minify svg files
- `gulp watch`: start browsersync

### Browser Support ###

Chrome 29+, IE 10+, Firefox 22+, Safari 6.1+, Opera 12+

### License ###

[MIT License](https://victordieggo.mit-license.org/) © Victor Diego Villar Guimarães
