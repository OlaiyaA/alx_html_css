
    const mobileNav = document.getElementById("nav-links-mobile");
// ===== MOBILE MENU TOGGLE =====
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-linksa");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("open");
      if (mobileNav.style.display === "flex") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "flex";
  }
    });

    // Optional: Close menu when a link is clicked
    document.querySelectorAll(".nav-linksa").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("open");
        mobileNav.style.display = "none";
      });
    });


