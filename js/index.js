
window.onload = () =>{  

  let cardSection = document.getElementById("cards");

  cardSection.addEventListener("click", function(event){
    event.preventDefault();
    event.stopPropagation();

    window.location.href = "./tictactoe.html";

    console.log("Fired!");




  });
  
  
  
  
  
  console.log("loaded")};

