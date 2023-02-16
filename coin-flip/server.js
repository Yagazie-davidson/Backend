import http from "http";
import fs from "fs";
import url from "url";
import querystring from "querystring";
import figlet from "figlet";
const server = http.createServer((req, res) => {
	const page = url.parse(req.url).pathname;
	const params = querystring.parse(url.parse(req.url).query);

	if (page === "/") {
		fs.readFile("index.html", function (err, data) {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			res.end();
		});
	} else if (page === "/api/boys") {
		res.writeHead(200, { "Content-Type": "application/json" });
		const objToJson = [
			{ name: "Letam", nationality: "Nigerian", babe: false },
			{ name: "Bobby", nationality: "Nigerian", babe: false },
			{ name: "Zumba", nationality: "Nigerian", babe: true },
		];
		res.end(JSON.stringify(objToJson));
	}
});

server.listen(8000);
