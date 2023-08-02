"use strict"

let studentCount = 10

if (studentCount < 10) {
  console.log("Es sind noch Plätze frei!")
} else {
  console.log("Es sind keine Plätze mehr frei!")
}

console.log("-".repeat(20))
// Else If
let studentCount2 = 4

if (studentCount2 < 5) {
  console.log("Es sind noch viele Plätze frei!")
} else if (studentCount2 < 8) {
  console.log("Es sind wenig Plätze mehr frei!")
} else if (studentCount2 < 10) {
  console.log("Es sind keine Plätze mehr frei!")
}