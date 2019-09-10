gulp = require('gulp');
browsersync = require('browser-sync').create();

gulp.task('default', async function(){
    browsersync.init({
        server: {
            baseDir: "dist/html/"
        }
    });

    gulp.watch('./dev/*').on('change', gulp.series('buildHtml', 'reload'));
});

gulp.task('reload', function(){
    return browsersync.reload();
})


gulp.task('buildHtml', function(){
    return gulp.src('dev/*.html')
    .pipe(gulp.dest('dist/html/'));
});