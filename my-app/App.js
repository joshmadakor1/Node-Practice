const Logger = require("./Logger");
const logger = new Logger();
logger.on("messageLogged", args => {
  console.log(args);
});
logger.log("Sticky butthole");

/*const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello world\n" + res);
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
  }
  res.end();
});

server.listen(3000);
*/
