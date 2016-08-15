var link = document.querySelector(".login");
var popup = document.querySelector(".pop-up");
var close = document.querySelector(".pop-up-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.add("pop-up-opened");
if (storage) {
login.value = storage;
password.focus();
} else {
login.focus();
}
});
close.addEventListener("click", function(event){
event.preventDefault();
popup.classList.remove("pop-up-opened");
});
window.addEventListener("keydown", function(event) {
if (event.keyCode == 27) {
if (popup.classList.contains("pop-up-opened")) {
popup.classList.remove("pop-up-opened");
 }
}
});
form.addEventListener("submit", function(event){
if (!(login.value && password.value)) {
event.preventDefault();
console.log("Логин и пароль есть? А если найду?");
} else {
localStorage.setItem("login", login.value);
}
});

var mapBtn = document.querySelector(".map-btn");
var map = document.querySelector(".pop-up-map");
var mapClose = map.querySelector(".pop-up-close")

mapBtn.addEventListener("click", function(event) {
event.preventDefault;
map.classList.add("pop-up-opened");
});
mapClose.addEventListener("click", function() {
map.classList.remove("pop-up-opened");
});
window.addEventListener("keydown", function(event) {
if (event.keyCode == 27) {
if (map.classList.contains("pop-up-opened")) {
map.classList.remove("pop-up-opened");
 }
}
});
