# Sass

![](https://i.imgur.com/DuD9nj5.jpg)

## ネスト

```scss
// css
.wrapper {
  width: 980px;
  margin: 0 auto;
}
.wrapper .inner {
  padding-left: 30px;
  padding-right: 30px;
}
.wrapper .inner p, .wrapper .inner .text {
  color: #333;
}

// sass
.wrapper {
  width: 980px;
  margin: 0 auto;
  .inner {
    padding-left: 30px;
    padding-right: 30px;
    p, .text {
      color: #333;
    }
  }
}
```

## &参照

```scss
// css
li a {
  background-color: #4567fa;
}
li a:hover {
  opacity: 0.9;
}
li a.link {
  text-decoration: underline;
}

// sass
li {
  a {
    background-color: #4567fa;
    &:hover {
      opacity: 0.9;
    }
    &.link {
      text-decoration: underline;
    }
  }
}
```

## &参照2

```scss
// css
.element {
  width: 150px;
}
.element__btn {
  background: #444;
}
.element__btn .element__btn--color {
  color: #fff;
}

// sass
.element {
  width: 150px;
  &__btn {
    background: #444;
    & &--color {
      color: #fff;
    }
  }
}
```

## $変数

```scss
// css
@charset "UTF-8";
body {
  font-family: "ヒラギノ角ゴシック", "Hiragino Sans", "メイリオ", Meiryo, sans-serif;
  background: #fefeff;
}

.inner {
  background: url(http://www.sample.com/public/images/001.png);
}

// sass
$color-bg: #fefeff;
$path-img: 'http://www.sample.com/public/images';
$font-base: 'ヒラギノ角ゴシック','Hiragino Sans','メイリオ', Meiryo,sans-serif;

body {
  font-family: $font-base;
  background: $color-bg;
}

.inner {
  background: url(#{$path-img}/001.png);
}

```

## @extend

```scss
// css
.line .right, .line .left {
  height: 8px;
  width: 50%;
  opacity: 0.6;
}

.line {
  display: flex;
}
.line .left {
  background: #f99ed9;
}
.line .right {
  background: #28eff2;
}

// sass
%line {
  height: 8px;
  width: 50%;
  opacity: 0.6;
}

.line {
  display: flex;
  .left {
    @extend %line;
    background: #f99ed9;
  }
  .right {
    @extend %line;
    background: #28eff2;
  }
}
```

## @mixin

```scss
// css
footer {
  margin-top: 30px;
  border-top: 1px solid #c8c8c8;
  background: #fff;
  padding-top: 30px;
  padding-bottom: 30px;
}

@media all and (max-width: 640px) {
  footer {
    padding-top: 50px;
    margin-top: 10px;
  }
}

// sass
@mixin sp($width: 640) {
  @media all and (max-width: #{$width}px) {
    @content;
  }
}

footer {
  margin-top: 30px;
  border-top: 1px solid #c8c8c8;
  background: #fff;
  padding-top: 30px;
  padding-bottom: 30px;
}

@include sp() {
  footer {
    padding-top: 50px;
    margin-top: 10px;
  }
}
```

## @import

```scss
// 個別にしたファイルをまとめてコンパイルできる
@import 'presets/**/*.scss';
@import 'modules/**/*.scss';
@import 'pages/**/*.scss';

```

## @function

```scss
$color-shadow: 0 3px 6px rgba(119, 119, 119, 0.096);

@function randomColor() {
  @return rgb(random(200) + 50, random(200) + 50, random(150) + 50);
}

@for $i from 1 through 30 {
  .box:nth-of-type(#{$i}) .color {
    background: lighten(randomColor(), 15%);
  }
}
```

## @while

```scss
// css
.mt50 {
  margin-top: 50px;
}

.mb50 {
  margin-bottom: 50px;
}

.mt40 {
  margin-top: 40px;
}

.mb40 {
  margin-bottom: 40px;
}

.mt30 {
  margin-top: 30px;
}

.mb30 {
  margin-bottom: 30px;
}

.mt20 {
  margin-top: 20px;
}

.mb20 {
  margin-bottom: 20px;
}

.mt10 {
  margin-top: 10px;
}

.mb10 {
  margin-bottom: 10px;
}

// sass
$value: 50;
@while $value > 0 {
  .mt#{$value} {
    margin-top: $value + px;
  }
  .mb#{$value} {
    margin-bottom:$value + px;
  }
  $value: $value - 10;
}
```

## @each 

```scss
// css
li a.Top {
  width: 25%;
}

li a.About {
  width: 25%;
}

li a.Product {
  width: 25%;
}

li a.Contact {
  width: 25%;
}

// sass
$nav-names: "Top", "About", "Product", "Contact";

@each $name in $nav-names {
    li a.#{$name} {
      width: (100% / 4)
    }
}
```
