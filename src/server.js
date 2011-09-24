var net = require('net');

var all = []

var server = net.createServer(function (socket) {


    socket.addListener("connect", function () {
        echoToAll("!!! New user connected\n",null);
        all.push(socket);
    });

    socket.addListener("data",function(data) {
        echoToAll(data,socket);
    });

    socket.addListener("end",function(){
        for (no in all) {
            if (socket === all[no]) {
                delete all[no]
                break;
            }
        }
        echoToAll("!!! User quit\n");
    });
          
});

var echoToAll = function(msg,socket) {
    for (no in all) {
        if (socket !== all[no]){
            all[no].write(msg)
        }
    }
}


// Fire up the server bound to port 7000 on localhost
server.listen(7000);
