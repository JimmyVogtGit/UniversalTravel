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

const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");


/* Gestion des bouton du quizz */

answer1.onsubmit = function(event) {
    event.preventDefault();
    const target = document.querySelector(".answer1");
    let valeur = document.querySelector('input[name=question1]:checked').value;
    console.log(`${valeur}`);

    if (valeur != "RonaldWisley") {
        target.style.backgroundColor = "red";


    } else {
        target.style.backgroundColor = "green"
    }
    document.querySelector(".hidden-button1").style.display = "none";

}

answer2.onsubmit = function(event) {
    event.preventDefault();
    const target = document.querySelector(".answer2");

    let valeur = document.querySelector('input[name=question2]:checked').value;
    console.log(`${valeur}`)
    if (valeur != "LePoudlardExpress") {
        target.style.backgroundColor = "red";

    } else {
        target.style.backgroundColor = "green";

    }
    document.querySelector(".hidden-button2").style.display = "none";

}

answer3.onsubmit = function(event) {
    event.preventDefault();
    const target = document.querySelector(".answer3");
    let valeur = document.querySelector('input[name=question3]:checked').value;
    console.log(`${valeur}`)
    if (valeur != "Voldemort") {
        target.style.backgroundColor = "red";
    } else {
        target.style.backgroundColor = "green"
    }
    document.querySelector(".hidden-button3").style.display = "none";
}