const fs = require('fs');
const http = require('http');


let filePath = "./config/test.txt";

http.createServer(function(req, res) {
	console.log("Incoming request");
	res.writeHead(200, {'Content-Type': 'text/plain'});
	if(fs.existsSync(filePath)) {
		let data = fs.readFileSync(filePath, "utf-8");
		console.log(data);
		res.write(data);
	}
	else {
		res.write("File not found!");
	}
	res.end();
}).listen(8888);

console.log("Server listening on port 8888");
