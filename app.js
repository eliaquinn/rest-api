const http = require("http");
const Todo = require("./controller");

const PORT = 5000;

const server = http.createServer(async (req, res) => {
    // /api/todos :GET
    if (req.url === "/api/todos" && req.method === "GET") {
        //get the todos
        const todos = await new Todo().getTodos();
        //set the status code, and content-type
        res.writeHead(200, {"Content-Type":"application/json"});
        //send the data
        res.end(JSON.stringify(todos));
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
