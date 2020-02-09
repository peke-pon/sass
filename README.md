# Sass

![](https://i.imgur.com/DuD9nj5.jpg)

## ネスト

```sass
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

```sass
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

```sass
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

```sass
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

```sass
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

```sass
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

```sass
// 個別にしたファイルをまとめてコンパイルできる
@import 'presets/**/*.scss';
@import 'modules/**/*.scss';
@import 'pages/**/*.scss';

```

## @function

```sass
// $変数名: 設定内容;
$color-shadow: 0 3px 6px rgba(119, 119, 119, 0.096);

// ランダムなカラーを設定する関数
@function randomColor() {
  @return rgb(random(255), random(255), random(255));
}
// forループで個別にカラーを設定する
@for $i from 1 through 30 {
  .box:nth-of-type(#{$i}) .color {
    background: randomColor();
    opacity: 0.6;
  }
}
```
