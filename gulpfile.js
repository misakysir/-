const gulp = require("gulp");
const connect = require("gulp-connect");
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

gulp.task('connect',function(){
    connect.server({
        port:8888,
        root:"./dist",
        livereload:true
    });
})

gulp.task("html",()=>{
    return gulp.src("./src/html/*.html")
        .pipe(gulp.dest("./dist/html"))
        .pipe(connect.reload());
})

gulp.task("js",()=>{
    return gulp.src("./src/scripts/*.js")
        .pipe(babel({
            presets : ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/scripts"))
        .pipe(connect.reload());
})

gulp.task('sass', function () {
    return gulp.src('./src/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./dist/styles'))
      .pipe(connect.reload());
  });

gulp.task("watch",()=>{
    gulp.watch("./src/html/*.html",["html"]);
    gulp.watch("./src/scripts/*.js",['js']);
    gulp.watch('./src/sass/*.scss',['sass']);

})

gulp.task("default",["watch","connect"]);