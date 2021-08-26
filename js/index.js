class ProjectLauncher {

  //initialize internal state
  constructor(cardEl){
    this.el = cardEl;
    this.type = card.attributes.getNamedItem("name").value;
    this.el.addEventListener('click', this.createLauncher.bind(this) );
  }

  createLauncher(){
    console.log('###  BEGIN LAUNCHING THE LAUNCHER  ###');
    let parentEl = this.el.parentNode;
    parentEl.innerHTML = "";

    let vanillaBtn = document.createElement("div");
    let reactBtn = document.createElement("div");
    vanillaBtn.setAttribute("class", "launcher-btns");
    vanillaBtn.innerText = "VanillaJS";
    reactBtn.setAttribute("class", "launcher-btns");
    reactBtn.innerText = "ReactJS";


    vanillaBtn.addEventListener('click', function(e){
      window.location.assign('./pages/pokie.html');
    });


    parentEl.appendChild(vanillaBtn);
    parentEl.appendChild(reactBtn);

    let headerTxt = document.getElementById('cards-header');
    headerTxt.innerHTML = '<h2> Select how to run the project: </h2>';
  }



}

const cards = document.getElementsByClassName("card");

for(card of cards){
  let type = card.attributes.getNamedItem("name").value;

  if (type == "pokes"){
    console.log("initiate pokie");
    const launcher = new ProjectLauncher(card);
  }
}
