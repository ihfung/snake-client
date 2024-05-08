let connection;

const handleUserInput = function(keyInput) {
 
  if (keyInput === 's') {
    console.log("down");
    connection.write('Move: down');
  }
  if (keyInput === 'w') {
    console.log("up");
    connection.write('Move: up');
  }
  if (keyInput === 'a') {
    console.log("left");
    connection.write('Move: left');
  }
  if (keyInput === 'd') {
    console.log("right");
    connection.write('Move: right');
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
module.exports = { setupInput };