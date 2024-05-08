const { connect } = require("./client"); // imports the connect function
const { setupInput } = require("./input"); // imports the setupInput function

console.log("Connecting ...");
const snakeVaraible = connect(); // calls the connect function and stores the connection object

setupInput(snakeVaraible); // calls the setupInput function and passes the connection object to it