let connection; // stores the active TCP connection object

const handleUserInput = function(keyInput) {
//movement keys and keybinds for messages and exit game
  if (keyInput === 'w') {
    //console.log("up");
    connection.write("Move: up");
  }
  if (keyInput === 'a') {
    //console.log("left");
    connection.write("Move: left");
  }
  if (keyInput === 's') {
    //console.log("down");
    connection.write("Move: down");
  }
  if (keyInput === 'd') {
    //console.log("right");
    connection.write("Move: right");
  }

  if (keyInput === 'z') {
    connection.write("Say: Nice try!");
  }

  if (keyInput === 'x') {
    connection.write("Say: So close!");
  }

  if (keyInput === '\u0003') {
    process.exit();
  }

};


const setupInput = (conn) => {
  connection = conn; // store the active TCP connection object
  const stdin = process.stdin; // setup interface for keyboard input
  stdin.setRawMode(true); // allows for special characters to be read
  stdin.setEncoding("utf8"); // // interpret incoming data as text
  stdin.resume(); // ensures the input is in the correct state
  stdin.on("data", handleUserInput); // calls the handleUserInput function when data is received
  return stdin;
};




setupInput(); // setupInput function is called
module.exports = { setupInput }; // exports the setupInput function