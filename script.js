document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const country = document.getElementById("country").value.trim();
    const comments = document.getElementById("comments").value.trim();

    if (name === "" || email === "" || country === "" || comments === "") {
      alert("Please fill in all fields before submitting.");
      return;
    }

    alert("Thank you for your message!");
    form.reset();
  });
});
