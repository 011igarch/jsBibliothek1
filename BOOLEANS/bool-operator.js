"use strict"

// Abgleich in mehrerern Arrays
let students1 = ["Max"] 
let students2 = ["Moritz"] 

if (students1.indexOf("Joker") === -1 && students2.indexOf("Joker") === -1) {
  console.log("Joker ist weder Teilnehmer students1 noch von students2")
}

// Reihenfolge Operatoren

console.log(5 + 3 * 5)
console.log(5 + 5 === 10)