var gulp = require("gulp");
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

var config = {
    ts : {
        src: [
            './**/*.ts',
            './**/*.tsx',
            '!./node_modules/**'
        ],
        dst: './',
        options: {
			target: 'ES6',
			module: 'commonjs',
            jsx: 'react'
		}
    },
    scss: {
        src: [
            './public/css/**/*.scss'
        ],
        dst: './public/css/',
    }
};

gulp.task('build:develop', function () {
    return gulp.src(config.ts.src)
		.pipe(sourcemaps.init())
		.pipe(typescript(config.ts.options))
		.js
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.ts.dst));
});
