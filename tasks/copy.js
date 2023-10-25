// const gulp = require("gulp");
import gulp from 'gulp'

export default function copy(done) {
  gulp
    .src(['source/fonts/**/*', 'source/*.ico'], {
      base: 'source',
    })
    .pipe(gulp.dest('build'))
  done()
}
