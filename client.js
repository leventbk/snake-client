// establishes a connection with the game server
// const net = require("net");

// const connect = function(data) {
// 	console.log(data);
// 	const conn = net.createConnection({ //The conn object is full of useful methods and properties that can now be used to interact with the server!
  
// 	  host: '10.0.0.174',// IP address here,
// 	  port: '50541'// PORT number here,
// 	});
// 	conn.on("event name", functionThatDoesSomething);
// 	conn.on("event name", () => {
// 	  // code that does something
// 	});
// 	conn.on("connect", () => {
// 	  // code that does something when the connection is first established
// 	});
// 	// interpret incoming data as text
// 	conn.setEncoding("utf8");
  
// 	return conn;
//   };
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.0.174',// IP address here,
    port: '50541' // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on()

  client.on('connect', () => {
	console.log("You have connected to Sneak server! but not the Solid Snake");
	conn.write("Player: Super Dude!");
  });
  
  conn.on('data', (data) => {
	console.log("Server says: ", data);
  });

////////snake movement START
  const handleUserInput = function(key) {
	if (key === '\u0003') {
	  process.exit();
	}
	  
	if (key === MOVE_UP_KEY) {
	  connection.write('Move: up');
	}
	if (key === MOVE_LEFT_KEY) {
	  connection.write('Move: left');
	}
	if (key === MOVE_DOWN_KEY) {
	  connection.write('Move: down');
	}
	if (key === MOVE_RIGHT_KEY) {
	  connection.write('Move: right');
	}
	if (MESSAGES[key]) {
	  connection.write(MESSAGES[key]);
	}

	const setupInput = function(conn) {
		connection = conn;
		const stdin = process.stdin;
		stdin.setRawMode(true);
		stdin.setEncoding('utf8');
		stdin.on('data', handleUserInput);
		stdin.resume();
		return stdin;
	  };
  
  };
//////////snake movement END

  return conn;
};

//console.log("Connecting ...");
//connect();

  module.exports = connect