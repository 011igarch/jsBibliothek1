"use strict"

console.log("Terminal Befehl: node [dateiname.js]");


// Bsp.: let inlineHtml = html`<div></div>oder ul>li*3`;
let inlineHtml = `<div></div>ul>li*3`;

console.log("Terminal Befehl: node [dateiname.js]inlineHTML Erweiterung. Funktioniert bei Template Literale Schreibweise. Vor Backticks html schreiben, dann funktioniert auch Emmet und Autovervollständigung. Siehe Beispiel");

let templateStringConverter = "besonders";

// wandelt automatisch Anführungszeichen in Backticks um
const STRINGXY = `Das wird ${templateStringConverter} gut.`;
console.log(STRINGXY);