const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const snakeVaraible = connect(); //

setupInput(snakeVaraible);