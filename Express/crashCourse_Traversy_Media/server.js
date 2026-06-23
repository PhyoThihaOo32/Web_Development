const express = require("express");

// init express
const app = express();

// add route
app.get("/", (req, res) => {
  res.send("Hello World");
  // sending html data
  //   res.send("<h1>Hello World</h1>");
  // sending jason data
  //   res.send({ message: "Hello World" });
});

// start the server
app.listen(8000, () => console.log(`Server running on port 8000`));
