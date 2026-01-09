let lastScroll = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  // TOP OF PAGE → transparent & visible
  if (currentScroll <= 10) {
    navbar.classList.remove("scrolled", "hide");
  } 
  else {
    // Once user scrolls → white background
    navbar.classList.add("scrolled");

    // Scrolling DOWN → hide
    if (currentScroll > lastScroll) {
      navbar.classList.add("hide");
    } 
    // Scrolling UP → show
    else {
      navbar.classList.remove("hide");
    }
  }

  lastScroll = currentScroll;
});




// const toggle = document.getElementById("menuToggle");
// const overlay = document.getElementById("menuOverlay");

// toggle.addEventListener("click", () => {
//   overlay.classList.toggle("active");
//   toggle.classList.toggle("active");
//   document.body.classList.toggle("menu-open"); // 🔥 KEY LINE
// });




const scrollBtn = document.getElementById("scrollDown");
const nextSection = document.getElementById("welcome");

scrollBtn.addEventListener("click", () => {
  nextSection.scrollIntoView({ behavior: "smooth" });
});


