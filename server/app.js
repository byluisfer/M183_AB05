import express from "express";
import http from "http";
import initializeAPI from "./api.js";

// Create the express server
const app = express();
app.use(express.json());
const server = http.createServer(app);

// deliver static files from the client folder like css, js, images
app.use(express.static("client"));
// route for the homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/index.html");
});

// Initialize the REST api
initializeAPI(app);

//start the web server
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Express Server started on port ${serverPort}`);
});
