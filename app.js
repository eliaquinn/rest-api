const http = require("http");

const PORT = 5000;

const server = http.createServer(async (req, res) => {
    //set the request route
    if (req.url === "/api" && req.method === "GET") {
        //response headers
        res.writeHead(200, {"Content-Type":"application/json"});
        //set the response
        res.write("Hello world!");
        //end the response
        res.end();
    }
   //if no route present
   else {
    res.writeHead(404, {"Content-Type":"application/json"});
    res.end(JSON.stringify({ message: "Route not found"}));

   }
});

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
})
