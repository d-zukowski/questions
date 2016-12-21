//***************** Include plugins *** ****************** */

const gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    browserSync = require('browser-sync').create(),
    clean = require('gulp-clean'),
    cleanCSS = require('gulp-clean-css'),
    concatCss = require('gulp-concat-css'),
    connect = require('gulp-connect'),
    del = require('del'),
    gulpif = require('gulp-if'),
    historyApiFallback = require('connect-history-api-fallback'),    
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    jsonminify = require('gulp-jsonminify'),
    lazypipe = require('lazypipe'),
    ngAnnotate = require('gulp-ng-annotate'),
    plumber = require('gulp-plumber'),
    pug = require('gulp-pug'),
    runSequence = require('run-sequence'),
    runTimestamp = Math.round(Date.now()/1000),
    sass = require('gulp-sass'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),    
    uglify = require('gulp-uglify');


//***************** Tasks for /build/ *** ****************** */


// *** Build - clean *** 

gulp.task('build-clean', function () {
    return del(['build/**/*']);    
});

// *** Build - pug *** 

gulp.task('build-clean-pug', function () {
    return gulp.src(['build/**/*.html'], {read: false})
        .pipe(clean());
});

gulp.task('build-compile-pug', function () {    
    return gulp.src('src/**/*.pug', {base: 'src/'})
        .pipe(pug())
        .pipe(gulp.dest('build'));
});

gulp.task('build-pug', function () {
     runSequence('build-clean-pug', 'build-compile-pug');
});

// *** Build - css *** 

gulp.task('build-clean-css', function () {
    return gulp.src('build/css/**/*', {read: false})
        .pipe(clean());
});

gulp.task('build-compile-scss', function () {
    return gulp.src(['src/scss/main.scss']) 
        .pipe(plumber())
        // .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sass.sync())
        // .pipe(sourcemaps.write('../maps/css/'))                          
        .pipe(gulp.dest('build/css/'));
});

gulp.task('build-prefix-css', function () {
    return gulp.src('build/css/**/*.css')  
        .pipe(autoprefixer({browsers: ['last 10 versions', 'IE 10']}))                  
        .pipe(gulp.dest('build/css/'))
        .pipe(browserSync.reload({
          stream: true
        }));        
        
});

gulp.task('build-compile-css', function () {
     runSequence('build-compile-scss', 'build-prefix-css');
});

gulp.task('build-css', function () {
     runSequence('build-clean-css', 'build-compile-scss', 'build-prefix-css');
});


// *** Build - js *** 

gulp.task('build-clean-js', function () {
    return gulp.src('build/js/**/*', {read: false})
        .pipe(clean());
});

gulp.task('build-compile-js', function () {
    return browserify({
        entries: ['./src/app/app.module.js']
    })
    .transform(babelify.configure({
        presets : ['es2015']
    }))
    .bundle()    
    .pipe(source('main.js'))
    .pipe(ngAnnotate())     
    .pipe(gulp.dest('build/app'));
});

gulp.task('build-js', function () {
     runSequence('build-clean-js', 'build-compile-js');
});

// *** Build - data *** 

gulp.task('build-clean-data', function () {
    return gulp.src('build/data/**/*', {read: false})
        .pipe(clean());
});

gulp.task('build-copy-data', function () {  
    return gulp.src(['src/data/**/*'], {base: 'src/'})	
        .pipe(gulp.dest('build'));
});

gulp.task('build-data', function () {
     runSequence('build-clean-data', 'build-copy-data');
});

// *** Build - fonts *** 

gulp.task('build-copy-fonts', function () {
    return gulp.src('src/fonts/**/*', {base: 'src/'})	
        .pipe(gulp.dest('build'));
});

// *** Build - images *** 

gulp.task('build-clean-img', function () {
    return gulp.src('build/img/**/*', {read: false})
        .pipe(clean());
});

gulp.task('build-copy-img', function () {
    return gulp.src(['src/img/**/*'], {base: 'src/'})	
        .pipe(gulp.dest('build'));
});

gulp.task('build-img', function () {
     runSequence('build-clean-img', 'build-copy-img');
});

// *** Build - others *** 

gulp.task('build-clean-others', function () {
    return gulp.src(['src/.htaccess'], {read: false})
        .pipe(clean());
});

gulp.task('build-copy-others', function () {
    return gulp.src(['src/.htaccess'], {base: 'src/'})	
        .pipe(gulp.dest('build'));
});

gulp.task('build-others', function () {
     runSequence('build-clean-others', 'build-copy-others');
});

// *** Build - browserSync *** 

gulp.task('build-browsersync', function () {
    browserSync.init({        
        server: {
            baseDir: 'build/',
            middleware: [historyApiFallback()],
            routes: {
                '/node_modules': 'node_modules'
            }            
        }        
    });    
});


// *** Build - watchers *** 

gulp.task('build-watch', function () {
    gulp.watch('src/scss/**/*.scss', ['build-css']);
    gulp.watch('src/**/*.js', ['build-js', browserSync.reload]);
    gulp.watch('src/**/*.pug', ['build-pug', browserSync.reload]);
    gulp.watch('src/data/**/*', ['build-data', browserSync.reload]);
    gulp.watch('src/img/**/*', ['build-img', browserSync.reload]);
    gulp.watch(['.htaccess'], ['build-others', browserSync.reload]);
});


//***************** Tasks for /dist/ *** ****************** */


// *** Dist - clean *** 

gulp.task('dist-clean', function () {
    return del('dist/**/*');
});


// *** Dist - copy *** 

gulp.task('dist-copy', function () {	
    return gulp.src('build/**/*', {base: 'build/'})	
        .pipe(gulp.dest('dist'));
});


// *** Dist - html *** 

gulp.task('dist-html', function() {				
    return gulp.src('dist/**/*.html', {base: 'dist/'})
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});


// *** Dist - css *** 

gulp.task('dist-css', function() {				
    return gulp.src('dist/css/**/*.css', {base: 'dist/'})
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'));
});


// *** Dist - js *** 

gulp.task('dist-js', function() {			
    return gulp.src('dist/app/**/*.js', {base: 'dist/'})
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});


// *** Dist - json *** 

gulp.task('dist-json', function () {    
    return gulp.src('dist/data/**/*.json', {base: 'dist/'})
        .pipe(jsonminify())
        .pipe(gulp.dest('dist'));   
});


// *** Dist - img *** 

gulp.task('dist-img', function () {    
    return gulp.src('dist/img/**/*', {base: 'dist/'})
        .pipe(imagemin())
        .pipe(gulp.dest('dist'));    
});


//***************** Runners *** ****************** */


// *** Build *** 

gulp.task('default', function () {	
    runSequence('build-clean', 'build-compile-pug', 'build-compile-css', 'build-compile-js', 'build-copy-data', 'build-copy-fonts', 'build-copy-img', 'build-copy-others', 'build-browsersync', 'build-watch');
});


// *** Dist *** 

gulp.task('dist', function () {	
    runSequence('dist-clean', 'dist-copy', 'dist-html', 'dist-css', 'dist-js', 'dist-json', 'dist-img');
});


// *** Dist + Server *** 

gulp.task('dist:server', ['dist'], function () {	
    browserSync.init({
        server: 'dist/'
    });
});