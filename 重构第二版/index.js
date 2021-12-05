const statement = require("./statement");
const play = require("./play.json");
const invoices = require("./invoices.json");
console.log(statement(invoices, play));
