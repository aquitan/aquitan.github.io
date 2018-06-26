var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var paths = {
	html: ['index.html'],
	htmlOrange: ['index-orange.html'],
	htmlBlue: ['index-blue.html'],
	htmlBrown: ['index-brown.html'],
	css: ['sass/main.scss'],
	cssOrange: ['sass/main-orange.scss'],
	cssBlue: ['sass/main-blue.scss'],
	cssBrown: ['sass/main-brown.scss'],
	cssCompany: ['sass/main-company.scss']
}




////////////////////
///Browser-sync
////////////////////
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "./"
    },
    port: 8080,
    open: true,
    notify: false
  });
});




////////////////////
///HTML
////////////////////
gulp.task('html', function() {
	gulp.src(paths.html)
	.pipe(notify('Done, Master!'))
	.pipe(reload({stream: true}));
});

gulp.task('htmlOrange', function() {
	gulp.src(paths.htmlOrange)
	.pipe(notify('Done, Master!'))
	.pipe(reload({stream: true}));
});

gulp.task('htmlBlue', function() {
	gulp.src(paths.htmlBlue)
	.pipe(notify('Done, Master!'))
	.pipe(reload({stream: true}));
});

gulp.task('htmlBrown', function() {
	gulp.src(paths.htmlBrown)
	.pipe(notify('Done, Master!'))
	.pipe(reload({stream: true}));
});


////////////////////
///CSS
////////////////////
gulp.task('mincss', function() {
	return gulp.src(paths.css)
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('css'))
	.pipe(notify('Done, Master!'))
	.pipe(reload({stream: true}));
});


gulp.task('mincssOrange', function() {
	return gulp.src(paths.cssOrange)
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('css'))
	.pipe(notify('Done, Master Orange!'))
	.pipe(reload({stream: true}));
});


gulp.task('mincssBlue', function() {
	return gulp.src(paths.cssBlue)
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('css'))
	.pipe(notify('Done, Master Blue!'))
	.pipe(reload({stream: true}));
});

gulp.task('mincssBrown', function() {
	return gulp.src(paths.cssBrown)
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('css'))
	.pipe(notify('Done, Master Brown!'))
	.pipe(reload({stream: true}));
});

gulp.task('mincssCompany', function() {
	return gulp.src(paths.cssCompany)
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('css'))
	.pipe(notify('Done, Master Company!'))
	.pipe(reload({stream: true}));
});

////////////////////
///Watch task
////////////////////
gulp.task('watcher', function() {
	gulp.watch(paths.css, ['mincss']);
	gulp.watch(paths.cssOrange, ['mincssOrange']);
	gulp.watch(paths.cssBlue, ['mincssBlue']);
	gulp.watch(paths.cssBrown, ['mincssBrown']);
	gulp.watch(paths.cssCompany, ['mincssCompany']);
	gulp.watch(paths.html, ['html']);
	gulp.watch(paths.htmlOrange, ['htmlOrange']);
	gulp.watch(paths.htmlBlue, ['htmlBlue']);
	gulp.watch(paths.htmlBrown, ['htmlBrown']);
	console.log('seen');
});

gulp.task('default', ['watcher', 'browserSync']);