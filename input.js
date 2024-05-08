let connection;

const handleUserInput = function(keyInput) {
 
  if (keyInput === 'w') {
    connection.write("Move: up");
  }
  if (keyInput === 'a') {
    connection.write("Move: left");
  }
  if (keyInput === 's') {
    connection.write("Move: down");
  }
  if (keyInput === 'd') {
    connection.write("Move: right");
  }
  if (keyInput === '\u0003') {
    process.exit();
  }

};


const setupInput = (conn) => {
  connection = conn; //
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};




setupInput();
module.exports = { setupInput};