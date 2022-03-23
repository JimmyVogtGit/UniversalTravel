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
        name: "Step 3 : Christ Church ",
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

    const createDivPicture = document.createElement("div");
    createDivPicture.classList.add("picture");
    createDivPicture.style.backgroundImage = `url(${picture})`;
    createDiv.appendChild(createDivPicture);



    const createDivTitle = document.createElement("div");
    createDivTitle.classList.add("text");
    createDiv.appendChild(createDivTitle);

    const createTitle = document.createElement("h2");
    createTitle.innerHTML = `${title}`;
    createDivTitle.appendChild(createTitle);


}

for (let el in textPicture) {
    callTextPicture(textPicture[el].name, textPicture[el].picture);
}


/*********************  Gestion des bouton du quizz ****************************/

function showResult(r) {
    const quizzReply = document.querySelector(".quizz-reply");

    if (r === 0) {
        quizzTexte = document.createElement("h4");
        quizzTexte.textContent = `Vous avez ${r} bonne réponse... Partir sur les traces d'Harry vous fera le plus grand bien.`;
        quizzReply.appendChild(quizzTexte);

    }

    if (r === 1) {
        quizzTexte = document.createElement("h4");
        quizzTexte.textContent = `Vous avez ${r} bonne réponse. Heureux de vous dire que notre voyage comblera vos attentes`;
        quizzReply.appendChild(quizzTexte);

    }

    if (r === 2) {
        quizzTexte = document.createElement("h4");
        quizzTexte.textContent = `Vous avez ${r} bonnes réponses. Pas mal ! -5% sur le prix du voyage grace à ce code : 9-3/4`;
        quizzReply.appendChild(quizzTexte);

    }

    if (r === 3) {
        quizzTexte = document.createElement("h4");
        quizzTexte.textContent = `Vous avez ${r} bonnes réponses. Wouhouuuu quel talent ! -10% sur le prix du voyage grace à ce code promo: 7777777`;
        quizzReply.appendChild(quizzTexte);

    }
}


const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");

let result = 0;
let increment = 0;

answer1.onsubmit = function(event) {
    event.preventDefault();
    const target = document.querySelector(".answer1");
    let valeur = document.querySelector('input[name=question1]:checked').value;
    console.log(`${valeur}`);

    if (valeur != "RonaldWisley") {
        target.style.backgroundColor = "red";
        target.style.padding = "10px";


    } else {
        target.style.backgroundColor = "green";
        target.style.padding = "10px";
        result += 1;
        console.log(result);


    }
    document.querySelector(".hidden-button1").style.display = "none";
    increment++;
    increment === 3 ? showResult(result) : 0;

}

answer2.onsubmit = function(event) {
    event.preventDefault();
    const target = document.querySelector(".answer2");

    let valeur = document.querySelector('input[name=question2]:checked').value;
    console.log(`${valeur}`)

    if (valeur != "LePoudlardExpress") {
        target.style.backgroundColor = "red";
        target.style.padding = "10px";



    } else {
        target.style.backgroundColor = "green";
        target.style.padding = "10px";
        result += 1;
        console.log(result);


    }
    document.querySelector(".hidden-button2").style.display = "none";
    increment++;
    increment === 3 ? showResult(result) : 0;


}



answer3.onsubmit = function(event) {
    event.preventDefault();
    const target = document.querySelector(".answer3");
    let valeur = document.querySelector('input[name=question3]:checked').value;
    console.log(`${valeur}`)


    if (valeur != "Voldemort") {
        target.style.backgroundColor = "red";
        target.style.padding = "10px";


    } else {
        target.style.backgroundColor = "green";
        target.style.padding = "10px";
        result += 1;
        console.log(result);

    }
    document.querySelector(".hidden-button3").style.display = "none";
    increment++;
    increment === 3 ? showResult(result) : 0;
}