// script.js
// Simple JavaScript used across the site

// Set current year in footer
function setCurrentYear() {
  const year = new Date().getFullYear();
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = year;
  }
  // Also update any elements with class "year-copy"
  const yearCopies = document.querySelectorAll(".year-copy");
  yearCopies.forEach(function (el) {
    el.textContent = year;
  });
}

// Handle contact form submission
function handleContactSubmit(event) {
  event.preventDefault(); // Prevent actual form submission for this project

  const nameInput = document.getElementById("name");
  const messageInput = document.getElementById("message");
  const feedback = document.getElementById("form-feedback");

  if (!nameInput.value.trim() || !messageInput.value.trim()) {
    feedback.textContent = "Please complete all required fields before submitting.";
    feedback.style.color = "red";
    return false;
  }

  feedback.textContent = "Thank you for reaching out. We will review your message and respond as soon as possible.";
  feedback.style.color = "green";

  // Clear form fields after showing message
  nameInput.value = "";
  document.getElementById("email").value = "";
  document.getElementById("role").value = "veteran";
  messageInput.value = "";

  return false;
}

// Run when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  setCurrentYear();
});
