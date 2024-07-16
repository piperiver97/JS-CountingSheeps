export function countSheeps(array) {
    let conttrue = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === true) {
        conttrue++;
      }
    }
    if (conttrue != 0) {
      return "There are " + conttrue + " sheeps in total";
    }
  
    if (conttrue === 0) {
      return "UPS!!! Wolfs eaten Sheeps";
    }
  }