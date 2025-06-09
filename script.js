// Google Translate initialization function - must be in the global scope
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: 'en' },
    'google_translate_element'
  );
}

// Show main content after 3 seconds
setTimeout(() => {
  document.getElementById('mainContent').style.display = 'block';
}, 3000);

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  // Toggle mobile menu and update accessibility attribute
  if (menuIcon && navbar) {
    menuIcon.setAttribute("aria-expanded", "false");

    menuIcon.onclick = () => {
      // Toggle the 'active' class on the navbar
      navbar.classList.toggle("active");

      // Toggle the aria-expanded attribute for accessibility
      const expanded = menuIcon.getAttribute("aria-expanded") === "true";
      menuIcon.setAttribute("aria-expanded", String(!expanded));
    };
  }

  // Hide buttons with empty or "#" href
  window.addEventListener("load", function () {
    const reviewButtons = document.querySelectorAll(".btn a");

    reviewButtons.forEach((button) => {
      const href = button.getAttribute("href");
      if (href === "#" || href === "") {
        button.closest(".btn").style.display = "none";
      }
    });
  });

  // Contact form validation
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form from submitting

      // Get form field values and trim whitespace
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const formMessage = document.getElementById("formMessage");

      // Check if all fields are filled
      if (!name || !email || !message) {
        formMessage.style.color = "#d32f2f";
        formMessage.textContent = "Please fill in all fields.";
        return;
      }

      // Success message and form reset
      formMessage.style.color = "#388e3c";
      formMessage.textContent = "Message sent successfully! Thank you.";
      contactForm.reset();
    });
  }

  // ScrollReveal animations (make sure ScrollReveal library is loaded)
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal({
      distance: '60px',
      duration: 2000,
      delay: 200,
      reset: true
    });

    // Reveal different elements with various effects
    ScrollReveal().reveal('.home-content h1', { origin: 'top' });
    ScrollReveal().reveal('.home-content h3', { origin: 'left' });
    ScrollReveal().reveal('.home-content p', { origin: 'right' });
    ScrollReveal().reveal('.btn-group, .social-icons', { origin: 'bottom', interval: 200 });
    ScrollReveal().reveal('.about-img, .about-content', { origin: 'left' });
    ScrollReveal().reveal('.skills-box, .project-card', { origin: 'bottom', interval: 100 });
    ScrollReveal().reveal('.contact form', { origin: 'top' });
  }
});



  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
