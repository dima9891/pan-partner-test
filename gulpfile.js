const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))

function buildStyles() {
    return gulp
        .src("./sass/main.scss")
        .pipe(sass({
            includePaths: ['node_modules']
        }))
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

