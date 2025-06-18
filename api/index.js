const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// ✅ all your routes here (sum, todos, todo, interest, notifications)
app.get("/", (req, res) => {
  res.send("✅ Welcome to the Sum Server API! Endpoints: /sum, /todo, /todos, /interest, /notifications");
});

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a + b;
  res.send(sum.toString());
});

// (other routes go here)

// ✅ 👇️ this line is essential for serverless
module.exports = app;
