const net = require("net");
const { IP, PORT } = require("./constants"); // imports the IP and PORT from constants.js
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here, from constants.js
    port: PORT, // PORT number here, from constants.js
  });

  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => { // event handler for incoming data
    console.log("Server says:", data); // logs the incoming data
  });

  conn.on("connect", () => { // event handler for connection established
    console.log("Successfully connected to game server");
    conn.write("Name: LHF"); // sends the name to the server
    /*setTimeout(() => {
      conn.write("Move: up");
    }, 50);
    setTimeout(() => {
      conn.write("Move: down");
    }, 100);
    setTimeout(() => {
      conn.write("Move: left");
    }, 150);
    setTimeout(() => {
      conn.write("Move: right");
    }, 200);
    */
    /*
    setInterval(() => {
      conn.write("Move: up");
    }, 50);
    setInterval(() => {
      conn.write("Move: down");
    }, 100);
    setInterval(() => {
      conn.write("Move: left");
    }, 150);
    setInterval(() => {
      conn.write("Move: right");
    }, 200);
   */
  
  });
  
  return conn; // returns the connection object
};

module.exports = { connect }; // exports the connect function