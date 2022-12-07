let Mmenu = document.querySelector(".mobile-I-links")
let threeLins = document.querySelector(".lins-mobile")
let head = document.querySelector('header')
let main = document.querySelector('main')
let footer = document.querySelector('.bottom')
let ax = document.querySelector("body .mobile-I-links div")

threeLins.onclick = () => { 
    Mmenu.style.right = 0
    head.style.opacity = "0.5"
    main.style.opacity = "0.5"
    footer.style.opacity = "0.5"
  Mmenu.style.display = "inline"
  Mmenu.style.position = "fixed"
}

ax.onclick = () => {
  Mmenu.style.right = "-500px"
  head.style.opacity = "1"
      main.style.opacity = "1"
    footer.style.opacity = "1"
  Mmenu.style.display = "none"
}

// animation on scroll

let b_one = document.querySelector("#one");
let b_two = document.querySelector("#two");
let b_three = document.querySelector("#three");



window.onscroll = () => {
  if (window.scrollY >= footer.offsetTop - 700) {
    b_one.style.animationName = "F-right"
    b_one.style.display = "grid"
    b_two.style.animationName = "F-bottom"
    b_two.style.display = "grid"
    b_two.style.animationDuration = "1.5s"
    b_three.style.animationName = "F-left"
    b_three.style.display = "grid"
    b_three.style.animationDuration = "1.7s"
  };
};