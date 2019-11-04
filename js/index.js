// // Your code goes here
// alert("Don't double click on this page or it'll disappear.");

//#1 Page (dblclick)
$("body").dblclick(function() {
  $("body").fadeToggle();
  alert("I warned you!");
});

//#2 Logo (mouseenter and mouseleave)
const logo = document.querySelector(".logo-heading");
logo.addEventListener("mouseenter", () => {
  logo.style.transform = "scale(1.2)";
  logo.style.transition = "0.5s";
});

logo.addEventListener("mouseleave", () => {
  logo.style.transform = "scale(1)";
  logo.style.transition = "0.5s";
});

//#3 NavBar (click)
const navBar = document.querySelector(".nav");
navBar.addEventListener("click", () => {
  navBar.style.transform = "translateX(-50%)";
  navBar.style.transition = "0.8s";
});
navBar.addEventListener("mouseleave", () => {
  navBar.style.transform = "translateX(0px)";
  navBar.style.transition = "0.8s";
});

// #4 All headings (Keydown and keyup)
const page = document.body;
const headings = document.querySelectorAll("h1, h2, h3, h4, a");
headings.forEach(heading =>
  page.addEventListener("keydown", () => {
    heading.style.color = "#17A2B8";
  })
);

headings.forEach(heading =>
  page.addEventListener("keyup", () => {
    heading.style.color = "#212529";
  })
);

// #5 Text (Select)
const text = document.querySelectorAll("p");
text.forEach(txt =>
  page.addEventListener("click", () => {
    txt.style.color = "#17A2B8";
  })
);

text.forEach(txt =>
  page.addEventListener("mouseout", () => {
    txt.style.color = "#212529";
  })
);

// #6 Img (Wheel)
function zoom(event) {
  event.preventDefault();
  scale += event.deltaY * -0.01;
  scale = Math.min(Math.max(0.125, scale), 4);
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector("img");
el.onwheel = zoom;

// #7 Footer (Contextmenu)
const noContext = document.querySelector("footer p");
noContext.addEventListener("contextmenu", e => {
  e.preventDefault();
});

// Header #8 (Resize)
let heightOutput = document.createElement("a");
let widthOutput = document.createElement("a");
heightOutput.style.color = "red";
widthOutput.style.color = "red";

navBar.prepend(heightOutput, widthOutput);

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;

// #9
