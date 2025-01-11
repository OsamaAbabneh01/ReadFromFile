const http = require("http");
const fs = require("fs");
const port = 8000;
const host = "127.0.0.1";


let server = http.createServer((req, res)=> {
    fs.readFile("file.txt", (err, data) => {
        if (err)
        {
            res.writeHead(500, {"content-type":"text/plain"});
            console.log("Error \"read file\" ");
        }
        else
        {
            res.writeHead(200, {"content-type":"text/html"});
            res.end(`<h1 style="color: green; text-align: center; background-color: gray">${data}</h1>`);
        }
    });
});

server.listen(port, host, () => {
    console.log(`Server in running on port #${port} and host ${host}`);
})