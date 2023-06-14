
// const { connect } = require('./client');
// const setupInput = function () {
// 	const stdin = process.stdin;
// 	stdin.setRawMode(true);
// 	stdin.setEncoding("utf8");
// 	stdin.resume();
// 	return stdin;
//   };

// console.log("Connecting ...");
// connect;

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:'10.0.0.174', // IP address here,
    port:'50541' // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
	console.log('Connection succesful!');
  });
  conn.on('data', data => {
	console.log(data);
  })

  return conn;
};

console.log("Connecting ...");
connect();