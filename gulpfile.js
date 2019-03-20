const gulp = require('gulp');
const watch = require('gulp-watch');
const plumber = require('gulp-plumber');
const nunjucks = require('gulp-nunjucks-render');
require('dotenv').config();

var name = process.env.NAME || 'default';

const data = require('./src/' + name + '/data.js');

gulp.task('html', () => {
    return watch([
        `./src/${name}/views/pages/*.html`,
        `./src/${name}/views/**/*.html`,
        `./src/${name}/data.js`,

    ],
        function () {
            gulp.src('./src/' + name + '/views/pages/*.html')
                .pipe(nunjucks({
                    path: ['./src/' + name + '/views/'],
                    ext: '.html',
                    data: {
                        css: (data) => {
                            return './public/css/' + data
                        },
                        js: (data) => {
                            return './public/js/' + data
                        },
                        img: (data) => {
                            return './public/images/' + data
                        },
                        data: data
                    }
                }))
                .pipe(
                    plumber({
                        errorHandler: function (error) {
                            console.log(error.toString());
                            this.emit('end');
                        }
                    })
                )
                .pipe(gulp.dest('dist/' + name + '/'));
        }
    );
})