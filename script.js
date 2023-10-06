let dissappear = document.querySelector(".logo");
setTimeout(function () {
  hide(dissappear);
}, 5000);
function hide(element) {
  element.style.display = "none";
}
let appear = document.querySelector(".mainBody");
setTimeout(function () {
  unhide(appear);
}, 5000);
function unhide(element) {
  element.style.display = "flex";
}
