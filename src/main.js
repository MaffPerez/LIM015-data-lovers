
import { dataPokemon, filterPokemon, filterType, filterBySort} from './data.js';

import data from './data/pokemon/pokemon.js';

/*----------------- Mostrar y ocultar secciones del HTML------------------------*/
const btnPokedex = document.getElementById("btnPokedex");
const btnHome = document.getElementById("btnHome");
const btnTop10 = document.getElementById("btnTop10");
const home = document.getElementById("home");
const containerMainPokedex = document.getElementById("containerMainPokedex");
const footer = document.getElementById("container-footer");
const allData = data.pokemon;
const seleccionarRegion= document.getElementById("seleccionarRegion");
const cardPokemon = document.getElementById("cardFrontPokemon");
const seleccionarTipo = document.getElementById("seleccionarTipo");
const seleccionarOrden = document.getElementById("seleccionarOrden");
const cleanFilter = document.getElementById("cleanFilter");

/*----------------- Extraer la data de Pokemon.js------------------------*/
const showPokemon  =() =>{
  cardPokemon.innerHTML = "";
  cardPokemon.innerHTML = data.pokemon.map(dataPokemon).join(" ");
}

/*----------------- Botones del Header ------------------------*/
btnPokedex.addEventListener("click",() => {
home.style.display="none";
containerMainPokedex.style.display="block";
footer.style.display="block";
showPokemon();
});

btnHome.addEventListener("click",() => {
containerMainPokedex.style.display="none";
home.style.display="block";
footer.style.display="none";
});

/*----------------- Extraer la data de Pokemon.js------------------------*/

cardPokemon.innerHTML = allData.map(dataPokemon).join(" ");

btnTop10.addEventListener("click", () => {
containerMainPokedex.style.display="none";
home.style.display="none";
footer.style.display="none";
});

/*----------------- Function Filter por región y tipo------------------------*/
seleccionarRegion.addEventListener("change", () => {
let regionSeleccionada = seleccionarRegion.value;
let dataFilter = filterPokemon(regionSeleccionada, allData);
cardPokemon.innerHTML = " ";
cardPokemon.innerHTML = dataFilter.map(dataPokemon).join(" ");
})

seleccionarTipo.addEventListener("click", () => {
  let tipoSeleccionado = seleccionarTipo.value;
  let dataFilter = filterType(tipoSeleccionado, allData);
  cardPokemon.innerHTML = " ";
  cardPokemon.innerHTML = dataFilter.map(dataPokemon).join(" ");
  })


/*----------------- Function Sort por nombre ascendente y descendente----------------*/
seleccionarOrden.addEventListener("change", () => {
  let ordenSeleccionado = seleccionarOrden.value;
  let dataSort = filterBySort(ordenSeleccionado, allData);
  cardPokemon.innerHTML = " ";
  cardPokemon.innerHTML = dataSort.map(dataPokemon).join(" ");
  })

/*----------------- Function Limpiar Filtros----------------*/
cleanFilter.addEventListener("click", () => {
    //e.preventDefault();
    //e.stopPropagation();
    cardPokemon.innerHTML = " ";
    cardPokemon.innerHTML = data.pokemon.map(dataPokemon).join(" ");
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
  //  return console.log("puedegirar");