# Spaceman #

Spaceman is a simple and easily customizable HTML/CSS boilerplate to build websites and apps. It provides a flexbox based responsive layout system, pre-set styles for basic UI elements and a few CSS utilities and components.

It was built over many iterations, cleanups, revisions and upgrades, which makes Spaceman a solid, stable and tested base for you to build on and extend its functionalities.

### Getting Started ###

Spaceman uses [Gulp](http://gulpjs.com/) and [Browsersync](https://www.browsersync.io/), so you'll need [Node.JS](https://nodejs.org/en/). Once you have set it up, [download Spaceman](https://github.com/victordieggo/spaceman/releases/latest) to your project directory and access the terminal:

```
# install gulp globally
$ npm install -g gulp

# go to your project directory
$ cd myproject

# install dev dependencies:
$ npm install

# initialize gulp and browsersync:
$ gulp
```

### Gulp Tasks ###

- `gulp`: run all tasks, start browsersync and watch files
- `gulp img`: compress images
- `gulp svg`: compress svg files
- `gulp js`: lint/build js
- `gulp js-lint`: lint js (eslint)
- `gulp js-build`: build js (compile/minify)
- `gulp css`: lint/build css
- `gulp css-lint`: lint css (stylelint)
- `gulp css-build`: build css (compile/minify)
- `gulp watch`: start browsersync and watch files
- `gulp build`: build js/css and compress images and svg files

### Browser Support ###

Chrome 29+, IE 10+, Firefox 22+, Safari 6.1+, Opera 12+

### License ###

[MIT License](https://victordieggo.mit-license.org/) © Victor Diego Villar Guimarães
