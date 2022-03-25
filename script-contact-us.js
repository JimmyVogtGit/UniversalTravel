const message =
  "Merci pour votre message. Nous ne manquerons pas de vous contacter très rapidement !";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    Swal.fire({
      text: message,
      title: "Que la force soit avec vous !",
      imageUrl: "Images/djerba.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      color: "#DBA988",
      background: "#162C3A",
      confirmButtonColor: "#DBA988",
    }).then((result) => {
      if (result.isConfirmed) {
        const inputs = document.querySelectorAll(".input");
        for (let input of inputs) {
          input.value = '';
        }
      }
    });
  });
