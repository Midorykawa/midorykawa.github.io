document.addEventListener("DOMContentLoaded", function () {

  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });


  const navbar = document.getElementById("navbar");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(15, 23, 42, 0.9)";
      navbar.style.padding = "0.5rem 2rem";
    } else {
      navbar.style.background = "rgba(30, 41, 59, 0.7)";
      navbar.style.padding = "0.75rem 2rem";
    }
  };

  window.addEventListener("scroll", handleScroll);


  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
