//headerrrrr
let section = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header nav a");
let dropdownLinks = document.querySelectorAll(".dropdown_menu a");

window.onscroll = function () {
  var header = document.querySelector(".header");
  var dropdownMenu = document.querySelector(".dropdown_menu");

  if (window.pageYOffset > 150) {
    header.classList.add("scrolled");
    dropdownMenu.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    dropdownMenu.classList.remove("scrolled");
  }

  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top > offset && top < offset + height) {
      navLink.forEach((links) => {
        links.classList.remove("active");
        links.classList.remove("animate");
      });
      dropdownLinks.forEach((link) => {
        link.classList.remove("active");
        link.classList.remove("animate");
      });

      let activeLink = document.querySelector("header nav a[href*=" + id + "]");
      let activeDropdownLink = document.querySelector(
        ".dropdown_menu a[href*=" + id + "]"
      );

      activeLink.classList.add("active");
      activeLink.classList.add("animate");
      activeDropdownLink.classList.add("active");
      activeDropdownLink.classList.add("animate");
    }
  });
};

//dark-modeeeee
let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");

function toggleDarkMode(icon) {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
}

icon1.onclick = function () {
  toggleDarkMode(icon1);
};

icon2.onclick = function () {
  toggleDarkMode(icon2);
};

//dropdownn

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function (event) {
  event.stopPropagation(); //
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

document.onclick = function (event) {
  if (dropDownMenu.classList.contains("open")) {
    dropDownMenu.classList.remove("open");
    toggleBtnIcon.classList = "fa-solid fa-bars";
  }
};

///messagw
window.onload = function () {
  setTimeout(function () {
    var alert = document.getElementById("alert");
    alert.style.display = "block";
    alert.classList.add("fade-in");
  }, 5000); // 5000ms = 5s
};

//visitor counter
if (localStorage.getItem("counter") === null) {
  localStorage.setItem("counter", 0);
}

let counter = localStorage.getItem("counter");
counter++;

document.getElementById("visitorCounter").innerHTML = counter;
localStorage.setItem("counter", counter);
