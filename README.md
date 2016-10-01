# Spaceman #

Spaceman is a simple and
easily customizable HTML/CSS boilerplate. It has a 12-column fluid grid and comes with a basic starter theme.

### Getting Started ###

Spaceman uses Gulp and Browsersync, that run on NodeJS. You might wanna know about them before we start:

- [NodeJS](https://nodejs.org/en/)
- [Gulp](http://gulpjs.com/)
- [Browsersync](https://www.browsersync.io/)

[Download Spaceman](https://github.com/victordieggo/spaceman/archive/master.zip) to your project directory then get on the command line:

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
- `gulp watch`: start browsersync

### Folders and Files ###

```
spaceman
├── assets
│   ├── css
│   │   ├── dist
│   │   │   └── style.css
│   │   └── src
│   │       ├── base.css
│   │       ├── buttons.css
│   │       ├── form.css
│   │       ├── grid.css
│   │       ├── layout.css
│   │       ├── navigation.css
│   │       ├── reset.css
│   │       └── typography.css
│   ├── img/
│   └── js
│       ├── dist
│       │   ├── jquery.min.js
│       │   └── main.js
│       └── src
│           └── navigation.js
├── gui.html
├── gulpfile.js
├── index.html
├── package.json
└── README.md
```

### License ###

MIT License © Victor Diego Villar Guimarães
