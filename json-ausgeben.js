"use strict"

const data = [
  {"firstname": "Max", "age": 21, "enrolled": true },
  {"firstname": "Moritz", "age": 29, "enrolled": false }
]

const dataAsJson = JSON.stringify(data)

console.log("data:", data)
console.log("typeof data (string):", typeof data)
console.log("da ein string, wird Klammer ausgegeben", data[0])

console.log("dataAsJson", dataAsJson)
console.log("typeof dataAsJson", typeof dataAsJson)

// fs.writeFileSync() nicht verwenden
const fs = require("fs")
fs.writeFileSync("neue-ausgeben.json", dataAsJson)