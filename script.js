
  // Load Google Translate
  function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      { pageLanguage: 'en' },
      'google_translate_element'
    );
  }
  function hideTranslateAfterSelection() {
  const translateElement = document.getElementById('google_translate_element');
  
  const select = translateElement.querySelector('select.goog-te-combo');
  if (!select) return;

  select.addEventListener('change', () => {
    setTimeout(() => {
      translateElement.style.display = 'none';
    }, 1000);
  });
}

window.addEventListener('load', () => {
  const interval = setInterval(() => {
    const translateElement = document.getElementById('google_translate_element');
    if (translateElement && translateElement.querySelector('select.goog-te-combo')) {
      clearInterval(interval);
      hideTranslateAfterSelection();
    }
  }, 500);
});

  // Run once the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", () => {

    // 🌐 Mobile Menu Toggle
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {
      menuIcon.setAttribute("aria-expanded", "false");

      menuIcon.addEventListener("click", () => {
        // Toggle classes for menu icon and navbar
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");

        // Update aria-expanded attribute for accessibility
        const expanded = menuIcon.getAttribute("aria-expanded") === "true";
        menuIcon.setAttribute("aria-expanded", String(!expanded));
      });
    }

    // ⏳ Show the main content after 3 seconds
    setTimeout(() => {
      const mainContent = document.getElementById('mainContent');
      if (mainContent) {
        mainContent.style.display = 'block';
      }
    }, 3000);

    // ❌ Hide buttons with empty or "#" hrefs
    const reviewButtons = document.querySelectorAll(".btn a");

    reviewButtons.forEach((button) => {
      const href = button.getAttribute("href");
      if (href === "#" || href === "") {
        const btnWrapper = button.closest(".btn");
        if (btnWrapper) btnWrapper.style.display = "none";
      }
    });

    // ✅ Contact form validation
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission

        // Get trimmed field values
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

        // Success message and reset form
        formMessage.style.color = "#388e3c";
        formMessage.textContent = "Message sent successfully! Thank you.";
        contactForm.reset();
      });
    }

    // ✨ ScrollReveal animations (if library is loaded)
    if (typeof ScrollReveal !== "undefined") {
      ScrollReveal({
        distance: '60px',
        duration: 2000,
        delay: 200,
        reset: true
      });

      // Reveal various elements on scroll
      ScrollReveal().reveal('.home-content h1', { origin: 'top' });
      ScrollReveal().reveal('.home-content h3', { origin: 'left' });
      ScrollReveal().reveal('.home-content p', { origin: 'right' });
      ScrollReveal().reveal('.btn-group, .social-icons', { origin: 'bottom', interval: 200 });
      ScrollReveal().reveal('.about-img, .about-content', { origin: 'left' });
      ScrollReveal().reveal('.skills-box, .project-card', { origin: 'bottom', interval: 100 });
      ScrollReveal().reveal('.contact form', { origin: 'top' });
    }

  });

mainContent.style.opacity = '0';
mainContent.style.transition = 'opacity 0.5s ease';
mainContent.style.display = 'block';
setTimeout(() => {
  mainContent.style.opacity = '1';
}, 50);
