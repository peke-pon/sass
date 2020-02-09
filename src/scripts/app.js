"use strict";

var colors = document.getElementsByClassName("color"),
  disp = document.getElementsByClassName("hex");

for (var e = 0; e < colors.length; e++) {
  var o = rgbToHex(
    window
      .getComputedStyle(colors[e], null)
      .getPropertyValue("background-color")
  );
  console.log(o), (disp[e].innerHTML = o);
}

function rgbToHex(e) {
  var o = "#",
    t = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

  if (t) {
    var l = [
      parseInt(t[1]).toString(16),
      parseInt(t[2]).toString(16),
      parseInt(t[3]).toString(16)
    ];

    for (var _e = 0; _e < l.length; ++_e) {
      1 == l[_e].length && (l[_e] = "0" + l[_e]), (o += l[_e]);
    }

    return o;
  }
}


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
