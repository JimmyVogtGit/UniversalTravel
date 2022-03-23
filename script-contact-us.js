const message =
  "Merci pour votre message. Nous ne manquerons pas de vous contacter très rapidement !";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });