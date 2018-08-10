var gulp = require('gulp');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');

var concat = require('gulp-concat');
var path = require('path');
var rename = require('gulp-rename');
var gulpSequence = require('gulp-sequence')

var browserSync = require('browser-sync');

gulp.task('scripts', function() {
	browserify('app/src/js/app.js')
	.transform('babelify', {
		presets: ['env', 'react']
	})
	.bundle()
	.pipe(source('index.min.js'))
	.pipe(buffer())
	// Comment .pipe(uglify()) below for development
	// .pipe(uglify())
	.pipe(gulp.dest('app/dist/js'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('less', function (callback) {
	return gulp.src('app/src/less/*.less')
	.pipe(less({
		paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(concat('index.css'))
	.pipe(gulp.dest('app/dist/css'))
});
gulp.task('minify-css', function (callback) {
	return gulp.src('app/dist/css/index.css')
	.pipe(cleanCSS({
		compatibility: 'ie8'
	}))
	.pipe(rename({
		suffix: '.min'
	}))
	.pipe(gulp.dest('app/dist/css'))
});
gulp.task('less-watch', ['less'], browserSync.reload);
gulp.task('less-sequence', gulpSequence('less-watch', 'minify-css'))

gulp.task('default', () =>{
	browserSync({
		server: {
			baseDir: 'app/'
		}
	});
	gulp.watch('app/src/js/**/*.js', ['scripts'])
	gulp.watch('app/src/less/**/*.less', function (event) {
		gulpSequence('less-watch', 'minify-css')(function (err) {
		  if (err) console.log(err)
		})
	  })
});