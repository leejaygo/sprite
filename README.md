# sprite

# 使用

依赖包：gulp gulp-cli gulp.spritesmith merge-stream

图片处理（制作sprite）
```javascript
// 制作sprite图采用的是gulp插件：gulp.spritesmith，需要安装Graphics Magick（图片处理软件）
// gulp.spritesmith：将一批图片合并，生成大图和样式文件

// icon
gulp common生成雪碧图
gulp retina生成兼容苹果电脑的两倍图
```

//目录结构
image文件夹放置原始图片
output文件夹放置生成的文件，sprite放置拼接完的雪碧图，style放置生成css文件（生成的文件支持生成less和sass）
