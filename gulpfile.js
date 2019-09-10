gulp = require('gulp');

gulp.task('build', function(){
    return gulp.src('dev/*.html')
    .pipe(gulp.dest('dist/'));
});