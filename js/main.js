const Mmenu = document.querySelector(".mobile-I-links");
const threeLins = document.querySelector(".lins-mobile");
const head = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector(".bottom");
const ax = document.querySelector("body .mobile-I-links div");

threeLins.onclick = () => {
  Mmenu.style.right = 0;
  head.style.opacity = "0.5";
  main.style.opacity = "0.5";
  footer.style.opacity = "0.5";
  Mmenu.style.display = "inline";
  Mmenu.style.position = "fixed";
};

ax.onclick = () => {
  Mmenu.style.right = "-500px";
  head.style.opacity = "1";
  main.style.opacity = "1";
  footer.style.opacity = "1";
  Mmenu.style.display = "none";
};

// animation on scroll

const b_one = document.querySelector(".one");
const b_two = document.querySelector(".two");
const b_three = document.querySelector(".three");

// to make the start animations only work when the document is loaded
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const mainP = document.querySelector("main .future p");
  const mainRead = document.querySelector("main .future .read");
  const mainImg = document.querySelector("main .main-img");
  const mainSide = document.querySelector("main .right");
  const whenReady = (...divs) => {
    divs.forEach((div) => {
      div.classList.add("animate");
    });
  }; /* add the 'animate' class to start the animation */
  setTimeout(() => {
    whenReady(header, mainP, mainRead, mainImg, mainSide);
  }, 500);

  // update event listener to trigger on touch devices
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY >= footer.offsetTop - 700) {
        whenReady(b_one, b_two, b_three);
      }
    },
    { passive: true }
  );
});
