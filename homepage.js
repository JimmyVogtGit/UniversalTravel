//SEARCHBAR
const loupeButton = document.getElementById("loupe");

loupeButton.addEventListener("click", loadPage);


function loadPage(){
  const inputValue = document.getElementById('searchbar').value;
  if(inputValue === "harry" || inputValue === "Harry"){
    window.location.replace('./destination.html');
  }
  
}