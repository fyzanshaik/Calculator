import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import ejs from "ejs"; // Import the EJS module

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000; // Change this to the desired port number

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Set the views directory using EJS
app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
  const num1 = parseFloat(req.body.number1);
  const num2 = parseFloat(req.body.number2);
  const operation = req.body.operation;
  let result;
  switch (operation) {
    case "addition":
      result = num1 + num2;
      break;
    case "subtraction":
      result = num1 - num2;
      break;
    case "multiplication":
      result = num1 * num2;
      break;
    case "division":
      result = num1 / num2;
      break;
  }
  
  res.render('result', { result });
});

app.listen(port, () => {
  console.log(`Server has started at http://localhost:${port}`);
});
