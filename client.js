const net = require("net");
const {IP, PORT} = require('./constants');

const name = process.argv[2]; //get just user name from CLI

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    const name = process.argv.slice(2)[0] ? process.argv.slice(2)[0] : "P01"; // sliced the process arguments if the first element of the array exists use that as name. Otherwise, use default(P01) as a name
    conn.write(`Name: ${name}`);
  });

  // conn.on('connect', () => {
  //   console.log("You have connected to Sneak server! but not the Solid Snake");
  //   conn.write(`Name: ${name || 'P01'}`);
  // });
  

  conn.on('data', data => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };