"use strict";

var box = document.getElementsByClassName("box"),
  hex = document.getElementsByClassName("hex"),
  color = document.getElementsByClassName("color"),
  cap = document.getElementsByClassName("cap");

var _loop = function _loop(_e2) {
  box[_e2].addEventListener("mouseover", function() {
    hex[_e2].classList.add("hexhov"),
      color[_e2].classList.add("colorhov"),
      cap[_e2].classList.add("caphov");
  }),
    box[_e2].addEventListener("mouseleave", function() {
      hex[_e2].classList.remove("hexhov"),
        color[_e2].classList.remove("colorhov"),
        cap[_e2].classList.remove("caphov");
    });
};

for (var _e2 = 0; _e2 < box.length; _e2++) {
  _loop(_e2);
}

var nav = document.querySelector(".tool");
var scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  ),
pageBottom = scrollHeight - window.innerHeight;

window.addEventListener("scroll", function() {
  var e = window.pageYOffset;
  e > 100 && e < pageBottom - 300
    ? nav.classList.add("active")
    : nav.classList.remove("active");
});
var toTop = document.getElementById("toTop");
console.log(toTop),
  toTop.addEventListener(
    "click",
    function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    !1
  );
