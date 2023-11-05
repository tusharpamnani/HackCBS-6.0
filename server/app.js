const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const routes = require("./routes");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(express.json());
app.use("/api", routes);


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
