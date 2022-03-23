const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const hero = document.querySelector(".hero");

prevButton.addEventListener("click", () => changeBackground("previous"));
nextButton.addEventListener("click", () => changeBackground("next"));


function changeBackground(direction){
    const backgroundImage = hero.style.backgroundImage;
    if(direction === "previous"){
        if(backgroundImage === 'url("Images/hobbiton.jpg")'){
            hero.style.backgroundImage = 'url("/Images/got-landscape.jpg")';
            hero.style.backgroundPosition = "bottom";
        } else if (backgroundImage === 'url("/Images/got-landscape.jpg")'){
            hero.style.backgroundImage = 'url("Images/lac-hp.jpg")';
            hero.style.backgroundPosition = "bottom";
        } else if (backgroundImage === 'url("Images/lac-hp.jpg")'){
            hero.style.backgroundImage = 'url("Images/hobbiton.jpg")';
            hero.style.backgroundPosition = "center";
        };
    }
    else if(direction === "next"){
        if(backgroundImage === 'url("Images/hobbiton.jpg")'){
            hero.style.backgroundImage = 'url("/Images/got-landscape.jpg")';
            hero.style.backgroundPosition = "bottom";
        } else if (backgroundImage === 'url("/Images/got-landscape.jpg")'){
            hero.style.backgroundImage = 'url("Images/lac-hp.jpg")';
            hero.style.backgroundPosition = "bottom";
        } else if (backgroundImage === 'url("Images/lac-hp.jpg")'){
            hero.style.backgroundImage = 'url("Images/hobbiton.jpg")';
            hero.style.backgroundPosition = "center";
        };
    }
}