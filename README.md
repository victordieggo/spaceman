# Spaceman #

Spaceman is a simple and easily customizable HTML/CSS boilerplate to build websites and apps. It provides a flexbox based responsive layout system, pre-set styles for basic UI elements and a few CSS utilities and components.

### Getting Started ###

Spaceman uses [Gulp](http://gulpjs.com/) and [Browsersync](https://www.browsersync.io/), so you'll need [Node.JS](https://nodejs.org/en/). Once you have set it up, [download Spaceman](https://github.com/victordieggo/spaceman/releases/latest) to your project directory and access the terminal:

```
# install gulp globally
$ npm install -g gulp

# go to your project directory
$ cd myproject

# install dev dependencies:
$ npm install

# initialize gulp and engage into hyperspace:
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
