const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
const frontend_url = process.env.frontend || 'http://localhost:3000';

app.use(cors({origin : frontend_url, methods: "GET,HEAD,PUT,PATCH,POST,DELETE"}));
app.use(express.json());
const DB = process.env.DB_URL;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);
const port_no = process.env.port || 5000;
app.listen(port_no, () => {
  console.log("server started on port 5000");
});
