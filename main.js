
import {filterRegion, filterType, filterBySort, computeStats} from './data.js';

import data from './data/pokemon/pokemon.js';

/*----------------- Definición de variables------------------------*/
const allData = data.pokemon;
let cardPokemon = document.getElementById("cardFrontPokemon");
const btnPokedex = document.getElementById("btnPokedex");
const btnHome = document.getElementById("btnHome");
const btnInfo = document.getElementById("btnInfo");
const containerMain = document.getElementById("container-main");
const containerMainPokedex = document.getElementById("containerMainPokedex");
const containerMoreInfo = document.getElementById("containerMoreInfo");
let containerFilter = document.getElementById("filterOptions");
const footer = document.getElementById("container-footer");
const seleccionarRegion= document.getElementById("seleccionarRegion");
const seleccionarTipo = document.getElementById("seleccionarTipo");
const seleccionarOrden = document.getElementById("seleccionarOrden");
const cleanFilter = document.getElementById("cleanFilter");
let infoExtra = document.getElementById("infoExtra");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const modalContainer = document.getElementById("modal-container");
const closeModal = document.getElementById("close-modal");
const modalPokemon = document.getElementById("modal-pokemon");

/*----------------- Menu desplegable para celular------------------------*/

navToggle.addEventListener("click", () =>  {
navMenu.classList.toggle("nav-menu_visible");
});

// const colorPokemon = () => {
//   const colors = {
//     fire: '#70A83B',
//     grass: '#DEFDE0',
//     electric: '#FCF7DE',
//     water: '#DEF3FD',
//     ground: '#f4e7da',
//     rock: '#d5d5d4',
//     fairy: '#fceaff',
//     poison: '#98d7a5',
//     bug: '#f8d5a3',
//     dragon: '#97b3e6',
//     psychic: '#eaeda1',
//     flying: '#F5F5F5',
//     fighting: '#E6E0D4',
//     normal: '#F5F5F5'
//   };
//   const main_types = Object.keys(colors);
//   let typeColor = colorCard(main_types,allData);
//   const color = colors[typeColor];
//   cardPokemon.style.backgroundColor = color;
//   console.log(color);
// };

const dataPokemon = (elemento) => {
  return `
  <div class="cardPokemon-front" id="${elemento.num}">
    <div class="containerNameNum">
      <h1 class="namePokemon">${elemento.name}</h1>
      <h1 class="numPokemon">N°${elemento.num}</h1>
    </div>
    <img src="${elemento.img}" alt="" class="imgPokemon">
    <h1 class="typePokemon">${elemento.type}</h1>
  </div>
  `
};



/*----------------- Mostrar la data de Pokemon.js------------------------*/
const showPokemon=() =>{
cardPokemon.innerHTML = "";
cardPokemon.innerHTML = allData.map(dataPokemon).join(" ");
};

/*----------------- Mostrar el Modal ------------------------*/
const showModal=() =>{
const eachCard = document.querySelectorAll(".cardPokemon-front");
  eachCard.forEach(card => card.addEventListener("click",() => {
  modalContainer.classList.add("show");

  const findPokemon = allData.find(modal => modal.num === card.id);
    modalPokemon.innerHTML = `
    <div class= "modal-pokemon">
        <h1 class="name-pokemon">${findPokemon.name}</h1>
        <img src="${findPokemon.img}" alt="" class="img-pokemon">
        <p class="about-pokemon">${findPokemon.about}</p>
    </div>
    `;
  }));

  closeModal.addEventListener('click', () => {
    modalContainer.classList.remove('show');
  });
  };

/*----------------- Botones del Header ------------------------*/
btnHome.addEventListener("click",() => {
navMenu.classList.toggle("nav-menu_visible");
containerMainPokedex.style.display="none";
containerMoreInfo.style.display="none";
containerMain.style.display="block";
footer.style.display="block";
});

btnPokedex.addEventListener("click",() => {
containerMain.style.display="none";
containerMainPokedex.style.display="block";
containerMoreInfo.style.display="none";
containerFilter.classList.add("show");
  // containerFilter.classList.add("show");
footer.style.display="block";
navMenu.classList.toggle("nav-menu_visible");

showPokemon();
showModal();
  // colorPokemon();
});

/*----------------- Mostrar la función Calculate ------------------------*/
btnInfo.addEventListener("click", () => {
containerMainPokedex.style.display="block";
containerMain.style.display="none";
containerFilter.classList.remove("show");
containerMoreInfo.style.display="block";
// containerFilter.classList.remove("show");
footer.style.display="block";
navMenu.classList.toggle("nav-menu_visible");

let rarityPokemon = "legendary";
let infoPokemon = computeStats(rarityPokemon,allData);
let allPokemon = infoPokemon.length;
let percentageInfo = parseInt(((allPokemon/251)*100));

infoExtra.innerHTML = "Did you know that only " + percentageInfo + "% " + "of Pokemon are " + rarityPokemon;

cardPokemon.innerHTML = " ";
cardPokemon.innerHTML = infoPokemon.map(dataPokemon).join(" ");
showModal();
});


/*----------------- Function Filter por región y tipo------------------------*/
seleccionarRegion.addEventListener("change", () => {
let regionSeleccionada = seleccionarRegion.value;
let dataFilter = filterRegion(regionSeleccionada, allData);
cardPokemon.innerHTML = " ";
cardPokemon.innerHTML = dataFilter.map(dataPokemon).join(" ");
seleccionarOrden.selectedIndex = 0;
seleccionarTipo.selectedIndex = 0;
showModal();
});

seleccionarTipo.addEventListener("click", () => {
let tipoSeleccionado = seleccionarTipo.value;
let dataFilter = filterType(tipoSeleccionado, allData);
cardPokemon.innerHTML = " ";
cardPokemon.innerHTML = dataFilter.map(dataPokemon).join(" ");
seleccionarRegion.selectedIndex = 0;
seleccionarOrden.selectedIndex = 0;
showModal();
});


/*----------------- Function Sort por nombre ascendente y descendente----------------*/
seleccionarOrden.addEventListener("change", () => {
let ordenSeleccionado = seleccionarOrden.value;
let dataSort = filterBySort(ordenSeleccionado, allData);
cardPokemon.innerHTML = " ";
cardPokemon.innerHTML = dataSort.map(dataPokemon).join(" ");
seleccionarTipo.selectedIndex = 0;
seleccionarRegion.selectedIndex = 0;
showModal();
});

/*----------------- Function Limpiar Filtros----------------*/
cleanFilter.addEventListener("click", () => {
cardPokemon.innerHTML = " ";
cardPokemon.innerHTML = data.pokemon.map(dataPokemon).join(" ");
seleccionarOrden.selectedIndex = 0;
seleccionarTipo.selectedIndex = 0;
seleccionarRegion.selectedIndex = 0;
});






//const mostrarFrente = () => {
//	if(cardsPokemon.classList.contains('active')){
	//	cardsPokemon.classList.remove('active');
	//}
//}
// const mostrarBack = () => {
//     if(cardPokemon-back.classList.contains('active')){
// 		cardPokemon-back.classList.remove('active');
// 	}
// }

// * Rotacion del cardPokemon
//cardsPokemon.addEventListener('click', () => {
  //  cardsPokemon.classList.toggle('active');
  //  return console.log("puedegirar")