# sass

## style.scss

```css
// @importで個別にしたファイルをまとめてコンパイルできる
@import 'presets/**/*.scss';
@import 'modules/**/*.scss';
@import 'pages/**/*.scss';
```
## _variable.scss

```css
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
