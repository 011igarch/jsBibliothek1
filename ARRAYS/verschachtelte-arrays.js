"use strict"

/** 
 * In JavaScript sind Arrays nicht typisiert
 * Auch verschachtelte Array sind zulässig!
 */
let liste = [
  "Banane",
  4,
  ["Element 1", "Element 2"]
]

console.log(liste[0])
console.log(liste[1])
console.log(liste[2][0])
console.log(liste[2][1])