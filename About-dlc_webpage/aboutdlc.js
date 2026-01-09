let lastScrollY = window.scrollY;
  const navbar = document.querySelector(".custom-navbar");

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // scrolling DOWN → show navbar
      navbar.classList.remove("nav-hidden");
    } else {
      // scrolling UP → hide navbar
      navbar.classList.add("nav-hidden");
    }

    lastScrollY = currentScrollY;
  });