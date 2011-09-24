var net = require("net");
var readline = require("readline");

var rl = readline.createInterface(process.stdin, process.stdout);

var host = "192.168.177.224";

var socket = net.createConnection(7000, host);

socket.on("data", function(data) {
   console.log(String(data));
});

rl.on("line", function(line) {
    socket.write(line);
    rl.prompt();
});

rl.on("close", function() {
    socket.close();
});
rl.prompt();
