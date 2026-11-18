require("dotenv").config();

const express = require("express");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = process.env.PORT || 3000;

if (!process.env.JWTSECRET) {
  console.error("JWTSECRET is missing. Add it to your .env file.");
  process.exit(1);
}

app.use(express.json());

app.use(authRoutes);
app.use(userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
