const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  

  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: LHF");
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
  
  return conn;
};

module.exports = { connect };