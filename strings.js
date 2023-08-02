"use strict"

let greeting = " ---Hallo Welt!--- "

// Die Anzahl der Zeichen in einem String
console.log(greeting.length)

// Ein einzelnes Zeichen abfragen | in Klammern = Kurzschreibweise
console.log(greeting.charAt(14))
console.log(greeting[14])

// Wo findet sich ein Zeichen in einem String?
console.log(greeting.indexOf("!"))
console.log(greeting.indexOf("---", 10))

// String in Großbuchstaben bzw. Kleinbuchstaben umwandeln
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())

// Text ersetzen
console.log(greeting.replace("!", "!!!"))

// Leerzeichen rechts und links vom String entfernen
console.log(greeting.trim().length)
console.log("Zeichnen nach trim()" + " " + greeting.trim().length)
console.log(greeting.trim())

console.log("---------------")

// Newline
console.log('Hallo\\\nWelt!')

// String wiederholen
console.log("-".repeat(20))
console.log("ab".repeat(5))
console.log("O|".repeat(5))

// .slice(start, end)
console.log("Hallo Welt".slice(0, 5))
console.log("Hallo Welt".slice(6, 10))
console.log("Hallo Welt".slice(6, 8))

// .substr(Position Start, length)
console.log("Hallo Welt".substr(6, 3))

console.log("-".repeat(20))


let shopping = "    Apfel, Pfirsich, +++Avocado, Mango   "

// Bei einer Einkaufsliste haben sich ein paar Fehler
// eingeschlichen. Unsere Texterkennung des Scans hat ein 
// paar Leerzeichen zu viel erkannt, sowie ein paar 
// Plus-Zeichen eingelesen, die im Original gar nicht 
// existieren. Das möchten wir korrigieren!


// Aufgabe 1: Entferne die Leerzeichen links und rechts, und
// schreibe das Ergebnis zurück in die Variable "shopping"
shopping = shopping.trim()
console.log("Aufgabe 1:" + shopping)

// Aufgabe 2: Finde die Position der drei Plus-Zeichen, und
// speichere diese in einer Variablen
let pos = shopping.indexOf("+++")
console.log("Aufgabe 2:" + pos)

// Aufgabe 3: Schneide die 3 Plus-Zeichen aus und gebe das 
// Ergebnis mit einem console.log aus.
// Verwende dazu einmal die .substr()-Funktion, und einmal
// die .slice()-Funktion
// 
// Es soll ausgegeben werden: "Apfel, Pfirsich, Avocado, Mango"
// Tipp: Du wirst hierzu 2 Aufrufe der jeweiligen Funktionen 
// benötigen - einmal bis hin zu den +++-Zeichen, und einmal
// für das Stück danach!
console.log(shopping.substr(0, pos) + shopping.substr(pos + 3))
console.log(shopping.slice(0, pos) + shopping.slice(pos + 3))

// Aufgabe 4: Schneide die 3 Plus-Zeichen aus. Verwende dazu
// die .replace()-Funktion!
console.log(shopping.replace("+++", ""))

// Aufgabe 5: Jetzt soll die Shopping-Liste ausgegeben werden.
// Wandle die Liste in folgendes Schreibweise um. Platziere
// auch die 2 Striche über / unter der Auflistung, und verwende
// dazu die .repeat()-Funktion!
// 
// --------------------
// Einkaufsliste:
//  - Apfel
//  - Birne
//  - Avocado
//  - Mango
// --------------------
//
// Tipp: Du kannst z.B. mit Hilfe der .replace()-Funktion immer nur ein
// Komma in einen Zeilenumbruch inklusive Bindestrich umwandeln.
// 
// Jetzt hier ist es vollkommen okay, wenn du daher .replace() mehrfach
// hintereinander aufrufst, bis alle Kommas in umgewandelt wurden:
// >> shopping.replace(...).replace(...).replace(...)
// 
// Später lernst du hierfür auch noch eine "elegantere" Methode kennen.
//
// Du darfst wahlweise alles in einem console.log()-Aufruf ausgeben, 
// oder auch mehrere console.log()-Aufrufe verwenden.

shopping = shopping.replace("+++", "")

console.log("-".repeat(20))
console.log("Einkaufsliste:")


let shoppingText = shopping
  .replace(", ", "\n - ")
  .replace(", ", "\n - ")
  .replace(", ", "\n - ")

console.log(" - " + shoppingText)

console.log("-".repeat(20))