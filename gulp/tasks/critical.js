const log = require('fancy-log');
const critical = require('critical').stream;

module.exports = function () {
    $.gulp.task('critical', function () {
        return $.gulp
            .src('build/*.html')
            .pipe(
                critical({
                    base: 'build/',
                    inline: true,
                    css: ['build/css/style.min.css'],
                    width: 1300,
                    height: 900,
                })
            )
            .on('error', err => {
                log.error(err.message);
            })
            .pipe($.gulp.dest('build'));
    });
};
