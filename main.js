// ===== NAVBAR & FOOTER LOAD =====
document.addEventListener("DOMContentLoaded", () => {

  const navbar = document.getElementById("navbar");
  const footer = document.getElementById("footer");

  if (navbar) {
    navbar.innerHTML = `
      <nav class="navbar">
        <div class="nav-container">
          <a href="#home" class="logo">Megha</a>
          <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contacts">Contact</a></li>
          </ul>
        </div>
      </nav>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      <footer class="footer">
        <p>© 2026 Megha Shibu. All rights reserved.</p>
      </footer>
    `;
  }
});


// Animate skill bars
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelectorAll(".skill-bar span").forEach(bar => {
      bar.style.width = bar.dataset.level + "%";
    });
  }, 300);
});

const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

if (form) {

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Error elements
  const errorName = document.getElementById('error-name');
  const errorEmail = document.getElementById('error-email');
  const errorSubject = document.getElementById('error-subject');
  const errorMessage = document.getElementById('error-message');

  // Reset errors
  errorName.textContent = '';
  errorEmail.textContent = '';
  errorSubject.textContent = '';
  errorMessage.textContent = '';

  let valid = true;

  if (!name) {
    errorName.textContent = 'Name is required';
    valid = false;
  }
  if (!email) {
    errorEmail.textContent = 'Email is required';
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errorEmail.textContent = 'Invalid email format';
    valid = false;
  }
  if (!subject) {
    errorSubject.textContent = 'Subject is required';
    valid = false;
  }
  if (!message) {
    errorMessage.textContent = 'Message is required';
    valid = false;
  } else if (message.length < 10) {
    errorMessage.textContent = 'Message must be at least 10 characters';
    valid = false;
  }

  if (valid) {
    form.reset();
    successMessage.classList.remove('hidden');
    setTimeout(() => {
      successMessage.classList.add('hidden');
    }, 5000);
  }
});
}
