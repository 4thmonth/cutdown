/**
 * Created by Administrator on 2017/6/12.
 */
//引入依赖
var gulp = require('gulp');

//引入插件
var uglifyJS = require("gulp-uglify");

//配置任务
gulp.task('uglifyJS',function(){
    gulp.src('data/*.js')
        .pipe(uglifyJS())
        .pipe(gulp.dest('dest'));
});

//默认任务
gulp.task('default',['uglifyJS']);