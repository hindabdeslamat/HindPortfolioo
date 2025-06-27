// ✅ Load Google Translate
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: 'en' },
    'google_translate_element'
  );
}

// ✅ Run once the DOM is fully loaded
// 
  document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {
      menuIcon.setAttribute("aria-expanded", "false");

      menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");

        const expanded = menuIcon.getAttribute("aria-expanded") === "true";
        menuIcon.setAttribute("aria-expanded", String(!expanded));
      });
    }

    // ✅ ScrollReveal
    if (typeof ScrollReveal !== "undefined") {
      ScrollReveal({
        distance: '60px',
        duration: 2000,
        delay: 200,
        reset: true
      });

      ScrollReveal().reveal('.home-content h1', { origin: 'top' });
      ScrollReveal().reveal('.home-content h3', { origin: 'left' });
      ScrollReveal().reveal('.home-content p', { origin: 'right' });
      ScrollReveal().reveal('.btn-group, .social-icons', { origin: 'bottom', interval: 200 });
      ScrollReveal().reveal('.about-img, .about-content', { origin: 'left' });
      ScrollReveal().reveal('.skills-box, .project-card', { origin: 'bottom', interval: 100 });
      ScrollReveal().reveal('.contact form', { origin: 'top' });
    }

    // ✅ Contact form validation
    const contactForm = document.querySelector(".contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = contactForm.querySelector("input[name='text']").value.trim();
        const email = contactForm.querySelector("input[name='email']").value.trim();
        const message = contactForm.querySelector("textarea").value.trim();
        const formMessage = document.getElementById("formMessage");

        if (!name || !email || !message) {
          formMessage.style.color = "#d32f2f";
          formMessage.textContent = "Please fill in all fields.";
          return;
        }

        formMessage.style.color = "#388e3c";
        formMessage.textContent = "Message sent successfully! Thank you.";
        contactForm.reset();
      });
    }
  });