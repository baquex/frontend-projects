const BASE_URL = ' https://pokeapi.co/api/v2/pokemon';
const err = document.getElementById("error-section");
const imagen = document.getElementById("card-img");
const figcaption = document.getElementById("caption-name");
const card = document.querySelector(".card");

function renderPokimon(pok, imgEl = imagen, capEl = figcaption){
  imgEl.setAttribute('src', pok.sprites.front_default);
  capEl.innerHTML = pok.name;
}

function setErr(e){
  err.classList.remove('hidden');
  err.classList.add('err');
  err.innerHTML = e;
}

function getData(random){
  fetch(BASE_URL + '/' + random)
    .then( data => data.json())
    .then( res => renderPokimon(res))
    .catch((e)=>setErr(e));

    
}

  card.addEventListener('click', () => getData(Math.floor(Math.random()*1000)));

  console.log();


