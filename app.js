const mobileToggle = document.querySelector(".mobile-nav-icons");
const mobileBtnOpen = document.querySelector(".mobile-nav-icon-open");
const mobileBtnClose = document.querySelector(".mobile-nav-icon-close");
const navMenu = document.querySelector(".nav-menu");
const navMenuBg = document.querySelector(".nav-menu-bg");
const emailInput = document.querySelector('input[type="email"]');
const inputMsg = document.querySelector(".input-msg");
const testimonials = document.querySelectorAll(".testimonial");
const sliders = document.querySelectorAll(".testimonial-slider");

//mobile menu

mobileToggle.addEventListener("click", function () {
  mobileBtnClose.classList.toggle("active");
  mobileBtnOpen.classList.toggle("active");
  navMenu.classList.toggle("active");
  navMenuBg.classList.toggle("active");
  document.body.classList.toggle("fixed");
});

// auto slider

let counter = 1;
setInterval(() => {
  for (let j = 0; j < sliders.length; j++) {
    testimonials[j].classList.remove("active");
    sliders[j].classList.remove("active");
  }
  testimonials[counter].classList.add("active");
  sliders[counter].classList.add("active");
  counter++;

  if (counter >= sliders.length) counter = 0;
}, 5000);

// slider dot
for (let i = 0; i < sliders.length; i++) {
  sliders[i].addEventListener("click", function () {
    for (let j = 0; j < sliders.length; j++) {
      testimonials[j].classList.remove("active");
      sliders[j].classList.remove("active");
    }

    sliders[i].classList.add("active");
    testimonials[i].classList.add("active");
  });
}

//check e-mail msg
emailInput.addEventListener("keyup", function () {
  inputMsg.innerHTML = "";
  if (
    !emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    inputMsg.innerText = "Please enter a valid e-mail";
  }
});
