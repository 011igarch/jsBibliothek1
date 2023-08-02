"use strict"

let a = true
if (a) {
  console.log("Die Variable a ist Wahr")
}

console.log("-".repeat(20))

let zahl1 = 5
let zahl2 = 6

if (zahl1 <= zahl2) {
  console.log("Die Zahl ist kleiner gleich Zahl2")
}

console.log("-".repeat(20))

// let nameStudi = "Joker"
let studis = ["Max", "Moritz"]

if (studis.indexOf("Joker") === -1) {
  console.log("Joker ist nicht in der Liste eingetragen")
}
// if (studis.indexOf(nameStudi) === -1) {
//   console.log("Joker ist nicht in der Liste eingetragen")
// }
console.log()