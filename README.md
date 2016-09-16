# Spaceman #

Simple HTML/CSS boilerplate from outer space.

### Getting Started ###

To run Spaceman you gonna need NodeJS and GulpJS. The watch task on gulpfile.js uses the plugin gulp-livereload, so you´ll also need the Google Chrome extension.

* [NodeJS](https://nodejs.org/en/)
* [GulpJS](http://gulpjs.com/)
* [Live Reload Extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)


    # clone this repository
    $ git clone https://github.com/victordieggo/spaceman.git
    $ cd spaceman

    # install gulp globally
    $ npm install -g gulp

    # install dev dependencies:
    $ npm install

You´re all set! Now run gulp and engage into hyperspace with Spaceman:

    $ gulp

### Tasks ###

* `gulp` : run all tasks and watch files for changes
* `gulp buildCSS` : combine all css source files/media queries and minify the generated file
* `gulp buildJS` : concatenate and minify js files
* `gulp watch` : watch files for changes

### License ###

MIT License © Victor Diego Villar Guimarães
