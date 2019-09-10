gulp = require('gulp');
browsersync = require('browser-sync').create();

gulp.task('default', async function(){
    browsersync.init({
        server: {
            baseDir: "dist/"
        }
    });

    gulp.watch('./dev/*').on('change', gulp.series('build', 'reload'));
});

gulp.task('reload', function(){
    return browsersync.reload();
})


gulp.task('build', function(){
    return gulp.src('dev/*.html')
    .pipe(gulp.dest('dist/'));
});