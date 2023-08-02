"use strict"

// data.json einlesen
// fs.readFileSync() nicht verwenden!

const fs = require("fs")
const data = fs.readFileSync("data.json", {encoding: "utf-8"})

console.log("data:", data)
console.log("typeof data (string):", typeof data)
console.log("da ein string, wird Klammer ausgegeben", data[0])

console.log(JSON.parse(data))

const dataObj = JSON.parse(data)
console.log(dataObj[0])