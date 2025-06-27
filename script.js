 window.addEventListener("load", () => {
    setTimeout(() => {
      const welcomeScreen = document.getElementById("welcomeScreen");
      if (welcomeScreen) {
        welcomeScreen.style.display = "none";
      }
    }, 2000);

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

window.addEventListener("DOMContentLoaded", () => {
  const translateDiv = document.createElement("div");
  translateDiv.id = "translate_button";
  translateDiv.style.position = "fixed";
  translateDiv.style.top = "10px";
  translateDiv.style.left = "10px";
  translateDiv.style.zIndex = "1000";
  document.body.appendChild(translateDiv);

  window.googleTranslateElementInit = function () {
    new google.translate.TranslateElement({
      pageLanguage: "en",
      includedLanguages: "en,fr,de,es,ar",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false,
    }, "translate_button");
  };

  const gScript = document.createElement("script");
  gScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.head.appendChild(gScript);
})
