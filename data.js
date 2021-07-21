
/*----------Colores del fondo de tarjeta según el tipo--------- */

// export const colorCard = (main_types, allData) => {
//   //let dataColorType = allData.filter(tipo=> tipo.type[0]== main_types[0]);
// const poke_types = allData.map(type => type.type[0]);
// const type = main_types.find(type => poke_types.indexOf(type) > -1);
// return type;
// };

/* ---------------Function Filter Region --------------------*/

export const filterRegion = (regionSeleccionada, allData) => {
let dataFilterRegion = allData.filter(reg=>reg.generation.name == regionSeleccionada)
return dataFilterRegion;
};

/* ---------------Function Filter Type --------------------*/

export const filterType = (tipoSeleccionado, allData) => {
let dataFilterType = allData.filter(tipo=> tipo.type.includes(tipoSeleccionado));
return dataFilterType;
};

  /* ---------------Function Sort--------------------*/
export const filterBySort = (ordenSeleccionado, allData) => {
  let orderAZ = Array.from(allData);
  let orderZA = Array.from(allData);
  orderAZ =orderAZ.sort((a, b) => (a.name > b.name) ? 1 : -1);
  orderZA =orderZA.sort((a, b) => (b.name > a.name) ? 1 : -1);
  if(ordenSeleccionado === "a-z"){
    return orderAZ;
  } else{
    return orderZA;
  }
};

 export const computeStats = (rarity,allData) => {
 let filterLegendarios = Array.from(allData);
  filterLegendarios = filterLegendarios.filter( leg => leg['pokemon-rarity'].includes(rarity));
  return filterLegendarios;
 }

/* -------------- Cara trasera de la tarjeta--------------------*/

  // let evolution = '';
  // let nextEvolution = '';
  // let prevEvolution = '';
  // let prevPrevEvolution = '';

  // if (elemento.evolution.hasOwnProperty("next-evolution")){
  //   evolution = elemento.evolution["next-evolution"][0].name;

  //   if(elemento.evolution["next-evolution"][0].hasOwnProperty("next-evolution")){
  //   nextEvolution = elemento.evolution["next-evolution"][0]["next-evolution"][0].name;
  //   } else if (elemento.evolution.hasOwnProperty("prev-evolution")){
  //     prevEvolution = elemento.evolution["prev-evolution"][0].name;
  //   }
  // } else if (elemento.evolution.hasOwnProperty("prev-evolution")){
  //   prevEvolution = elemento.evolution["prev-evolution"][0].name;
  //   if(elemento.evolution["prev-evolution"][0].hasOwnProperty("prev-evolution")){
  //   prevPrevEvolution = elemento.evolution["prev-evolution"][0]["prev-evolution"][0].name;
  //   }
  // }

  // `<div class="cardPokemon-back">
  // <h2 class="region">Region:${elemento.generation.name}</h2></br>
  // <h2 class="resistant">Resistant:${elemento.resistant}</h2></br>
  // <h2 class="weakness">Weakness:${elemento.weaknesses}</h2><br></br>
  // <h2>Evolutions</h2></br>
  // <h3 class="evolution">${evolution}</h3></br>
  // <h3 class="next-evolution">${nextEvolution}</h3></br>
  // <h3 class="prev-evolution">${prevEvolution}</h3></br>
  // <h3 class="prev-evolution">${prevPrevEvolution}</h3><br>
  // <input class="moreInfo" type="button" id="btnMoreInfo" value="More Info">
  //</div>`}