
  let lastScroll = 0;
  const header = document.querySelector(".site-header");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }

    if (currentScroll > 80) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
  });





const toggle = document.getElementById("menuToggle");
const overlay = document.getElementById("menuOverlay");

toggle.addEventListener("click", () => {
  overlay.classList.toggle("active");
  toggle.classList.toggle("active");
  document.body.classList.toggle("menu-open"); // 🔥 KEY LINE
});




const scrollBtn = document.getElementById("scrollDown");
const nextSection = document.getElementById("nextSection");

scrollBtn.addEventListener("click", () => {
  nextSection.scrollIntoView({ behavior: "smooth" });
});