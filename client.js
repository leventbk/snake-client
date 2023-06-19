const net = require("net");
const {IP, PORT} = require('./constants');

const name = process.argv[2];

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("You have connected to Sneak server! but not the Solid Snake");
    conn.write(`Name: ${name || 'P01'}`);
  });
  
  conn.on('data', data => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };