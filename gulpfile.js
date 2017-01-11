var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var merge = require('merge-stream');

gulp.task('default', function () {
    console.log('there is no default task');
});
 
gulp.task('sprite', function () {
    var spriteData = gulp.src('image/*.png').pipe(spritesmith({
        imgName: 'icon.png',
        cssName: 'icon.css',
        imgPath: '../sprite/icon.png',
        algorithm: 'top-down',

        cssOpts: {
            cssSelector: function (sprite) {
                return '.sp-' + sprite.name;
            }
        }
    }));
    var imgStream = spriteData.img.pipe(gulp.dest('./output/sprite'));
    var cssStream = spriteData.css.pipe(gulp.dest('./output/style'));

    return merge(imgStream, cssStream);
    //return spriteData.img.pipe(gulp.dest('path/to/output/'));
});

gulp.task('common', ['sprite'], function () {});

gulp.task('retina-sprite', function () {
    var spriteData = gulp.src('image/*.png').pipe(spritesmith({
        imgName: 'icon.png',
        cssName: 'icon.css',
        imgPath: '../sprite/icon.png',
        algorithm: 'binary-tree',//binary-tree,top-down

        retinaSrcFilter: './image/*@2x.png',
        retinaImgName: 'icon@2x.png',
        retinaImgPath: '../sprite/icon@2x.png',

        cssOpts: {
            cssSelector: function (sprite) {
                return '.sp-' + sprite.name;
            }
        }
    }));

    var imgStream = spriteData.img.pipe(gulp.dest('./output/sprite'));
    var cssStream = spriteData.css.pipe(gulp.dest('./output/style'));

    return merge(imgStream, cssStream);
    //return spriteData.img.pipe(gulp.dest('path/to/output/'));
});

gulp.task('retina', ['retina-sprite'], function () {});