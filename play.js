const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //Update the connect function to handle incoming data and console.log it for the player.
  conn.on("data", () => {
    console.log("you ded cuz you idled");
  });
  

  return conn;
};

console.log("Connecting ...");
connect();