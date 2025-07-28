// Initialize EmailJS with your Public Key
(function () {
  emailjs.init("n4-XTToS3uXkYItfG");
})();

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Send email using EmailJS
  emailjs.sendForm("service_da5ww05", "template_1qro3gz", this)
    .then(function (response) {
      document.getElementById("status-message").innerText = "✅ Message sent successfully!";
      document.getElementById("status-message").style.color = "green";
    }, function (error) {
      document.getElementById("status-message").innerText = "❌ Failed to send message. Try again.";
      document.getElementById("status-message").style.color = "red";
    });

  // Reset form fields
  this.reset();
});
