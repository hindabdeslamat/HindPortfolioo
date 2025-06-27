// ✅ Load Google Translate widget
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: 'en' },
    'google_translate_element'
  );
}

// ✅ Hide the translation widget after a language is selected
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

// ✅ Wait for the widget to load before applying the hide logic
window.addEventListener('load', () => {
  const interval = setInterval(() => {
    const translateElement = document.getElementById('google_translate_element');
    if (translateElement && translateElement.querySelector('select.goog-te-combo')) {
      clearInterval(interval);
      hideTranslateAfterSelection();
    }
  }, 500);
});

// ✅ Run when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // 🌐 Mobile menu toggle logic
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

  // ⏳ Show main content with fade-in effect after 3 seconds
  const mainContent = document.getElementById('mainContent');
  if (mainContent) {
    mainContent.style.opacity = '0';
    mainContent.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      mainContent.style.display = 'block';
      setTimeout(() => {
        mainContent.style.opacity = '1';
      }, 50);
    }, 3000);
  }

  // ❌ Hide buttons with empty or "#" hrefs
  const reviewButtons = document.querySelectorAll(".btn a");
  reviewButtons.forEach((button) => {
    const href = button.getAttribute("href");
    if (href === "#" || href === "") {
      const btnWrapper = button.closest(".btn");
      if (btnWrapper) btnWrapper.style.display = "none";
    }
  });

  // ✅ Simple contact form validation
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
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

  // ✨ ScrollReveal animations (if available)
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
});
