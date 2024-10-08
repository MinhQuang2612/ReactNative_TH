const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

let users = [];
let currentId = 1;

app.use(cors());
app.use(express.json());

// GET all users
app.get("/user", (req, res) => {
  res.json(users);
});

// GET single user by ID
app.get("/user/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// POST - Create a new user
app.post("/user", (req, res) => {
  const { name, email, phone } = req.body;
  const newUser = { id: currentId++, name, email, phone };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT - Update an existing user by ID
app.put("/user/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;
  const userIndex = users.findIndex((u) => u.id == id);
  if (userIndex !== -1) {
    users[userIndex] = { id: parseInt(id), name, email, phone };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// DELETE - Remove a user by ID
app.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((u) => u.id == id);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
