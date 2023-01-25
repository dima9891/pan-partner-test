const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const concat = require('gulp-concat')

function buildStyles() {
    return gulp
        .src("./sass/*.scss")
        .pipe(sass({
            includePaths: ['node_modules']
        }))
        .pipe(concat('styles.css'))
        .pipe(
            sass.sync({ outputStyle: "compressed" }).on("error", sass.logError)
        )
        .pipe(gulp.dest("./css"))
}

exports.buildStyles = buildStyles

exports.watch = function () {
    gulp.watch("./sass/*.scss", ["sass"])
}

function defaultTask() {
    return buildStyles()
}

exports.default = defaultTask

