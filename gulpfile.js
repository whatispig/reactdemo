var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");
var uglify = require("gulp-uglify");
var buffer = require("vinyl-buffer");
gulp.task("default",function(){
	return browserify("./source/app.js")
		  .transform(babelify,{presets:["react"]})
		  .bundle()
		  .pipe(source("test.js"))
		  //.pipe(buffer())
		  //.pipe(uglify())
		  .pipe(gulp.dest("./build/"));
});
gulp.task("minjs",function(){
	return gulp.src("./build/test.js")
		   .pipe(uglify())
		   .pipe(gulp.dest("./build/js"))
});
