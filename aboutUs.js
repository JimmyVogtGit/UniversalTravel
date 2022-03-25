function changePic1() {
  document.getElementById("myImg").src = "/Images/Antonio.jpeg";
}
function changePic2() {
  document.getElementById("myImg").src = "/Images/Legolas.jpg";
}

function changePic3() {
  document.getElementById("myImg2").src = "/Images/JV.jpeg";
}
function changePic4() {
  document.getElementById("myImg2").src = "/Images/Anakin-Skywalker.jpg";
}

function changePic5() {
  document.getElementById("myImg3").src = "/Images/pj.jpeg";
}
function changePic6() {
  document.getElementById("myImg3").src = "/Images/Khal-Drogo.jpg";
}

function changePic7() {
  document.getElementById("myImg4").src = "/Images/profil-ym.jpg";
}
function changePic8() {
  document.getElementById("myImg4").src = "/Images/Harry-Potter.jpg";
}

const message =
  "Merci pour votre commentaire et à bientôt pour une prochaine aventure !";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    Swal.fire({
      text: message,
      title: "Avada Kedavra !",
      imageUrl: 'Images/Harry-Potter.jpg',
      imageWidth: 350,
      imageHeight: 350,
      imageAlt: 'Custom image',
      color: '#DBA988',
      background: '#162C3A',
      confirmButtonColor : '#DBA988'
    });
  });