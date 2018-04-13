var gulp = require('gulp');
    sass = require('gulp-sass'); 
    browserSync = require('browser-sync');

gulp.task('sass', function(){
      return gulp.src('app/sass/**/*.sass') // take all sass files
          .pipe(sass()) // sass to css
          .pipe(gulp.dest('app/css')) //send to map app/css
          .pipe(browserSync.reload({stream: true})) // reload css with changes
  });
gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']); // wach if we have changes in sass files
  
});

gulp.task('browser-sync', function() { // create task sync
  browserSync({ 
      server: { // options for server
          baseDir: 'app' // course dir - app
      },
      notify: false //notifications
  });
});