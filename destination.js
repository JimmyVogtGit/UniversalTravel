const target = document.querySelector(".photo-text");

const textPicture = [

    {
        name: "titi",
        picture: "/Images/KingsCross.jpg"
    },

    {
        name: "tata",
        picture: "/Images/djerba.jpg"
    },

    {
        name: "toto",
        picture: "/Images/djerba.jpg"
    },

    {
        name: "tete",
        picture: "/Images/djerba.jpg"
    }


];

function callTextPicture(title, picture) {

    const createDiv = document.createElement("div");
    createDiv.classList.add("text-picture")
    target.appendChild(createDiv);

    const createTitle = document.createElement("h2");
    createTitle.classList.add("title");
    createTitle.innerHTML = `${title}`;
    createDiv.appendChild(createTitle);

    const createPicture = document.createElement("div");
    createPicture.classList.add("picture");
    /* View in Htlm the image rendering */
    /*createPicture.style.height = "200px";
    createPicture.style.width = "auto";*/
    createPicture.style.backgroundImage = `url(${picture})`;
    createDiv.appendChild(createPicture);
}

for (let el in textPicture) {
    callTextPicture(textPicture[el].name, textPicture[el].picture);
}