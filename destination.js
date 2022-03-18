const target = document.querySelector(".photo-text");

const textPicture = [

    {
        name: "Step 1 : Gare de KingsCross",
        picture: "/Images/KingsCross.jpg"
    },

    {
        name: "Step 2 : Millenium Bridge",
        picture: "/Images/milleniumBridge.jpg"
    },

    {
        name: "Step 3 : Christ Church College",
        picture: "/Images/christChurch.jpg"
    },

    {
        name: "Step 4 : Alnwick Castle",
        picture: "/Images/chateauHp.jpg"
    }


];

function callTextPicture(title, picture) {

    const createDiv = document.createElement("div");
    createDiv.classList.add("text-picture")
    target.appendChild(createDiv);

    const createPicture = document.createElement("div");
    createPicture.classList.add("picture");
    /* View in Htlm the image rendering */
    /*createPicture.style.height = "200px";
    createPicture.style.width = "auto";*/
    createPicture.style.backgroundImage = `url(${picture})`;
    createDiv.appendChild(createPicture);


    const createTitle = document.createElement("h2");
    createTitle.classList.add("title");
    createTitle.innerHTML = `${title}`;
    createPicture.appendChild(createTitle);
}



for (let el in textPicture) {
    callTextPicture(textPicture[el].name, textPicture[el].picture);
}