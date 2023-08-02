"use strict"

// Definition einer Funktion Video 63
function sayHello(vname) {
  console.log("Hallo " + vname + "!")
}

sayHello("Max")
sayHello("Moritz")

console.log("-".repeat(20))

// Mehrere Parameter Video 64
function sayHello2(vname, language) {
  if (language === "de") {
    console.log("DE: Hallo " + vname + "!")
  } else if (language === "en") {
    console.log("EN: Hello " + vname + "!")
  }
}

sayHello2("Max", "de")
sayHello2("Moritz", "en")

console.log("-".repeat(20))

// Parameter Standart setzen (language = "de") Video 65
function sayHello3(vname, language = "de") {
  if (language === "de") {
    console.log("DE STANDART: Hallo " + vname + "!")
  } else if (language === "en") {
    console.log("EN STANDART: Hello " + vname + "!")
  }
}

sayHello3("Max")
sayHello3("Moritz", "en")

console.log("-".repeat(20))

const persons = ["Max"]

function addPerson(vname) {
  persons.push(vname)
}

addPerson("Moritz")

console.log("Personen Array ausgeben: ", persons)

console.log("-".repeat(20))

// Rückgabewerte return - Video 66 und Video 70 - korrektes Dokumentieren | /** + Enter | mit Maus über summe hovern (Tooltip)

const items = [15, 25, 30]

/**
 * Berechnet die Summe der Zahlen in einer Liste
 * 
 * @param {number[]} liste Die Liste die aufsummiert wird
 * @returns {number} Die komplette Summe
 */
function summe(liste) {
  let s = 0
  for (const element of liste) {
    s += element
    console.log("-".repeat(10))
    console.log("Gibt Variable s aus der for-Schleife aus: ", s)
  }
  console.log("-".repeat(20))
  return s
}
// Weiter arbeiten mit der Summe
let itemsSum = summe(items)
console.log("Ist die Summe gleich 70 ?", itemsSum === 70)