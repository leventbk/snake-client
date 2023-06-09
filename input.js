const {COMMANDS} = require('./constants');

let connection;

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(key) { // To quit the game
  if (key === '\u0003') {
    process.exit();
  }

  if (!Object.keys(COMMANDS).includes(key)) {
    return;
  }

  connection.write(COMMANDS[key]);
};

module.exports = {
  setupInput
};