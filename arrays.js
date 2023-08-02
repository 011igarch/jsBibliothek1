"use strict"

let students = [
  "Erik Müller",
  "Dana Hubs",
  "Anika Schebe",
  "Stefan Wolf"
]

console.log(students)

// Was ist der Typ von einem Array?
console.log(typeof students)
console.log(students instanceof Array)

// Wie viele Elemente sind in einem Array?
console.log(".length", students.length)

// Auf einzelne Elemente zugreifen
console.log("[0]", students[0])

// Elemente existiert nicht
console.log("[100]", students[100])

// Element hinzufügen (mehrerer)
students.push("Joker", "Joker 2")
console.log(students)

// Letztes Element entfernen | Joker 2 wird entfernt
const lastElement = students.pop()
console.log("lastElement", lastElement)
console.log(students)

// Ein Element überschreiben
students[0] = "Überschreibe Müller"
console.log(students)


console.log("-".repeat(20))

// Strings sind Immutable (unveränderlich!)
// Aber Array sind mutable (veränderlich!)

let studis = ["Max", "Moritz"]
let copy = studis

studis.push("Joker")

console.log(studis)
console.log("-".repeat(20))
// Mutable und const - Ist erlaubt
const studis2 = ["Max", "Moritz"]
studis2.push("Joker")
console.log(studis2)