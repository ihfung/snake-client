const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.0.152',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //Update the connect function to handle incoming data and console.log it for the player.
  conn.on("data", (data) => {
    console.log(data);
  });
  conn.on("data", () => {
    console.log("you ded cuz you idled");
  });

  return conn;
};

console.log("Connecting ...");
connect();