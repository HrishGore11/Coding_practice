const express = require("express");
const app = express();
const Mongoose = require("mongoose");
const cors = require("cors");
const Port = process.env.Port || 9066;

app.use(express.json());
app.use(cors());
app.use("/api", require("./Routes/signupin"));

Mongoose.connect(
  "mongodb+srv://Hrishi:LHIvhd88qQKmgcZv@cluster0.v3rac.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewurlParser: true,
  }
)
  .then(() => {
    console.log("db connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(Port, () => {
  console.log("server running sucessfully at port " + Port);
});
