// ordenar por fecha descendiente
// seleccionar los partidos de la utlima fecha (calcular cual es la ultima fecha)
//
//

export function SortDates(matches){
    matches.sort((a, b) => b.numeroFecha - a.numeroFecha);
    return matches;
  }

// export function SortDates(matches){
//     console.log(matches,"matches helper")
//     matches.sort((a, b) => b.numeroFecha - a.numeroFecha);
//     console.log(matches,"matches sort")
//   }  