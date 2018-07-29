var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
    console.log("程序执行结束!");
    var resultbuffer = new Buffer.alloc(100,'1');
    fs.writeFile("./result.txt",resultbuffer,function(err){
    	if (err) { throw err; };
    	console.log("write successful!")
    })

});

var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener1', arg1, arg2); 
}); 
emitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener2', arg1, arg2); 
}); 
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数'); 
