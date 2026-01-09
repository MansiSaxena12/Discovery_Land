const navbar = document.getElementById("navbar2");
let lastScroll = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  // Always show at top
  if (currentScroll <= 50) {
    navbar.classList.remove("hide");
    navbar.classList.remove("scrolled");
  }
  else {
    navbar.classList.add("scrolled");

    // SCROLL DOWN → hide
    if (currentScroll > lastScroll) {
      navbar.classList.add("hide");
    }
    // SCROLL UP → show
    else {
      navbar.classList.remove("hide");
    }
  }

  lastScroll = currentScroll;
});
