// establishes a connection with the game server
const net = require("net");

const connect = function(data) {
	console.log(data);
	const conn = net.createConnection({ //The conn object is full of useful methods and properties that can now be used to interact with the server!
  
	  host: '10.0.0.174',// IP address here,
	  port: '50541'// PORT number here,
	});
	conn.on("event name", functionThatDoesSomething);
	conn.on("event name", () => {
	  // code that does something
	});
	conn.on("connect", () => {
	  // code that does something when the connection is first established
	});
	// interpret incoming data as text
	conn.setEncoding("utf8");
  
	return conn;
  };

  module.exports = connect