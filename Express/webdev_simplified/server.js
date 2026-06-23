const express = require("express");

// set up actual server
const app = express();

app.set("view engine", "ejs");

// setup route
app.get("/", (req, res) => {
  console.log("Here");
  // send data back to user
  //   res.send("HI"); // good for testing
  //   res.sendStatus(400); // send the status code
  //   res.status(200).send("OK BABY!");
  //   res.status(404).json({ message: "NOT FOUND!" }); // sending jason object
  //   res.download("server.js"); // send the file to the user to download
  res.render("index", { text: "World" });
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

// make server actuall run
app.listen(3000);
