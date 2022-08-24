const http = require("http");
const fs = require("fs").promises;

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    if (req.url === "/") {
        fs.readFile(__dirname + "/pages/home.html")
            .then((contents) => {
                res.end(contents);
            })
            .catch((err) => {
                console.error(`Could not read index.html file: ${err}`);
                process.exit(1);
            });
    } else if (req.url === "/about") {
        fs.readFile(__dirname + "/pages/about.html")
            .then((contents) => {
                res.end(contents);
            })
            .catch((err) => {
                console.error(`Could not read index.html file: ${err}`);
                process.exit(1);
            });
    } else if (req.url === "/profile") {
        fs.readFile(__dirname + "/pages/profile.html")
            .then((contents) => {
                res.end(contents);
            })
            .catch((err) => {
                console.error(`Could not read index.html file: ${err}`);
                process.exit(1);
            });
    } else if (req.url === "/skills") {
        fs.readFile(__dirname + "/pages/skills.html")
            .then((contents) => {
                res.end(contents);
            })
            .catch((err) => {
                console.error(`Could not read index.html file: ${err}`);
                process.exit(1);
            });
    } else if (req.url === "/contact") {
        fs.readFile(__dirname + "/pages/contact.html")
            .then((contents) => {
                res.end(contents);
            })
            .catch((err) => {
                console.error(`Could not read index.html file: ${err}`);
                process.exit(1);
            });
    } else {
        res.end("No such page found!");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
