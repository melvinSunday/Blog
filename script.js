//headerrrrr
let section = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header nav a");

window.onscroll = function () {
  var header = document.querySelector(".header");
  if (window.pageYOffset > 150) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
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
      let activeLink = document.querySelector("header nav a[href*=" + id + "]");
      activeLink.classList.add("active");
      activeLink.classList.add("animate");
    }
  });
};

//dark-modeeeee
let icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
};



//dropdownn

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
};

window.onload = function() {
  setTimeout(function() {
      var alert = document.getElementById('alert');
      alert.style.display = 'block';
      alert.classList.add('fade-in');
  }, 5000); // 5000ms = 5s
};


