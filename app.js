const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./src/routes/auth.routes");
const jokesRoutes = require("./src/routes/jokes.routes");

dotenv.config();
const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/jokes", jokesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
