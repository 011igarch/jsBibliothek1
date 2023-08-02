"use strict"

// Addition
console.log("5 + 6:", 5 + 6)

// Subtraktion
console.log("5 - 6:", 5 - 6)

// Multiplikation
console.log("5 * 6:", 5 * 6)

// Division
console.log("5 / 6:", 5 / 6)

// Modulo (Rest bei der ganzzahligen Division)
console.log("11 % 6:", 11 % 6)

// Potenz (2 hoch 10)
console.log("2 ** 10:", 2 ** 10)

// Runden
console.log("Runden, Math.round(5.5):", Math.round(5.5))
console.log("Abrunden, Math.floor(5.5):", Math.floor(5.5))
console.log("Aufrunden, Math.ceil(5.5):", Math.ceil(5.5))

// Maximum
console.log("Math.max(1, 2, 3):", Math.max(1, 2, 3))

// Minimum
console.log("Math.min(1, 2, 3):", Math.min(1, 2, 3))

console.log("-".repeat(20))

let s = "3.641"
let t = "0xFF"

// String in eine Ganzzahl umwandeln | Versucht Zahlensysteme automatisch zu erkennen
console.log("Variable s:", parseInt(s, 10))
console.log("Variable t:", parseInt(t))

// String in eine Kommazahl umwandeln
console.log(parseFloat(s))

// Achtung beim Rechnen mit Kommazahlen!
let result = 50.35 % 6 - 2.35
console.log(result)

// Rundungsfehler vermeiden | Lösung: Kommazahlen vermeiden!
let result2 = 5035 % 600 - 235
console.log(result2)

// Zahl zu String | toExponential = Wissenschaftlich | toPrecision = Stellen
let n = 3.145
console.log("" + n)
console.log(typeof"" + n)
// console.log(n.toExponential())
console.log(n.toFixed(2))
// console.log(n.toPrecision(2))

console.log("-".repeat(20))

// Aufgabe 1:
// 
// Für eine Tankstelle soll eine automatische Rückgeld-Ausgabe implementiert
// werden. Für dieses Beispiel soll ein Betrag von 15,37€ zurückgegeben werden.
//
// Wandle zuerst den Betrag in die englische Schreibweise um (15.37). Ersetze
// dazu mit Hilfe von .replace() das Komma durch einen Punkt.
//
// Lese anschließend den String mit Hilfe der parseFloat()-Funktion ein, und
// rechne ihn in Cent um. 
// 
// Gebe dann aus, mit welchen Münzen dieser Betrag bezahlt werden kann. Der 
// Einfachheit halber wird dieser Betrag ausschließlich mit Münzen bezahlt
// (vereinfacht den Code etwas).
// 
// Kombiniere dazu geschickt den Modulo, Rundungsfunktionen sowie ggf. den 
// Rest. Versuche, zuerst große Münzen auszugeben!
//
// Tipp: Rechne den Betrag am besten zuerst in Cents um. Sonst treten leicht
// Rundungsfehler auf, die das Programm unnötig kompliziert machen!
//
// Natürlich soll das Programm so geschrieben werden, dass jeder
// Beliebige Betrag zurückgegeben werden kann.
// 
// Beispielausgabe: 
//  - 7x 2€ Münze
//  - 1x 1€-Münze
//  - 0x 50 Cent-Münze
//  - 1x 20 Cent-Münze
//  - 1x 10 Cent-Münze
//  - 1x 5 Cent-Münze
//  - 1x 2 Cent-Münze
//  - 0x 2 Cent-Münze

let amountStr = "14,99"

let amount = parseFloat(amountStr.replace(",", ".")) * 100


console.log(" - " + Math.floor(amount / 50000) + " x 500 €")
amount = amount - Math.floor(amount / 50000) * 50000

console.log(" - " + Math.floor(amount / 20000) + " x 200 €")
amount = amount - Math.floor(amount / 20000) * 20000

console.log(" - " + Math.floor(amount / 10000) + " x 100 €")
amount = amount - Math.floor(amount / 10000) * 10000

console.log(" - " + Math.floor(amount / 5000) + " x 50 €")
amount = amount - Math.floor(amount / 5000) * 5000

console.log(" - " + Math.floor(amount / 2000) + " x 20 €")
amount = amount - Math.floor(amount / 2000) * 2000

console.log(" - " + Math.floor(amount / 1000) + " x 10 €")
amount = amount - Math.floor(amount / 1000) * 1000

console.log(" - " + Math.floor(amount / 500) + " x 5 €")
amount = amount - Math.floor(amount / 500) * 500

console.log(" - " + Math.floor(amount / 200) + " x 2 €")
amount = amount - Math.floor(amount / 200) * 200

console.log(" - " + Math.floor(amount / 100) + " x 1 €")
amount = amount - Math.floor(amount / 100) * 100

console.log(" - " + Math.floor(amount / 50) + " x 50 Cent")
amount = amount - Math.floor(amount / 50) * 50

console.log(" - " + Math.floor(amount / 50) + " x 50 Cent")
amount = amount - Math.floor(amount / 50) * 50

console.log(" - " + Math.floor(amount / 20) + " x 20 Cent")
amount = amount - Math.floor(amount / 20) * 20

console.log(" - " + Math.floor(amount / 10) + " x 10 Cent")
amount = amount - Math.floor(amount / 10) * 10

console.log(" - " + Math.floor(amount / 5) + " x 5 Cent")
amount = amount - Math.floor(amount / 5) * 5

console.log(" - " + Math.floor(amount / 2) + " x 2 Cent")
amount = amount - Math.floor(amount / 2) * 2

console.log(" - " + amount + " x 1 Cent")


/////////////////////////////////////////////////////////////////////////////

// Aufgabe 2
// 
// In Amerika ist es üblich, in Restaurants ca. 15-20% Trinkgeld zu geben. 
// Schreibe ein Programmn welches ca. 15-20% Tringeld auf eine Restaurant-
// Rechnung aufschlägt. 
//
// Versuche, dass der Betrag, der insgesamt bezahlt wird, möglichst nicht 
// zu krumm ist.
//
// Kombiniere dazu geschickt die Rundungsfunktionen, Divisionen oder 
// Multiplikationen.
//
// Zudem soll eine Ausgabe erfolgen, bei dem der Gesamtbetrag mit 2 Nachkommastellen
// ausgegeben wird. Beispiel: "Der Gesamtbetrag beträgt 20.00$"
//
// - Beispiel: Rechungsbetrag 17.00$    -> Der Gesamtbetrag beträgt 20.00$
// - Beispiel: Rechungsbetrag 16.50$    -> Der Gesamtbetrag beträgt 20.00$
// - Beispiel: Rechungsbetrag 10.00$    -> Der Gesamtbetrag beträgt 12.50$
//
// Das Programm muss nicht perfekt sein. Es reicht, wenn es ungefähr 
// funktioniert!

let bill = 17.00
let bill2 = 16.50
let bill3 = 10.00

let billTotal = Math.ceil(bill * 1.1 / 4) * 4
console.log("Der Gesamtbetrag: " + billTotal.toFixed(2) + " $")

console.log(Math.ceil(bill * 1.1 / 4) * 4)
console.log(Math.ceil(bill2 * 1.1 / 4) * 4)
console.log(Math.ceil(bill3 * 1.1 / 2.5) * 2.5)