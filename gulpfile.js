const gulp = require("gulp");
const connect = require("gulp-connect");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");

gulp.task('connect',function(){
    connect.server({
        port:8888,
        root:"./dist",
        livereload:true
    });
})

gulp.task("html",()=>{
    return gulp.src("./src/html/*.html")
        .pipe(gulp.dest("./dist/"))
        .pipe(connect.reload());
})

gulp.task("js",()=>{
    return gulp.src("./src/scripts/*.js")
        .pipe(gulp.dest("./dist/scripts"))
        .pipe(connect.reload());
})

gulp.task("watch",()=>{
    gulp.watch("./src/html/*.html",["html"])
    gulp.watch("./src/scripts/*.js",["js"])

})

gulp.task("default",["watch","connect"]);