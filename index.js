const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
require('dotenv').config();
const userRouter = require("./routes/users.route");
const dashboardRouter = require("./routes/dashboard.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


//database connection with mongoose
const connectionpOptions = {dbName: `hkhan`}
mongoose.connect(process.env.DB_CONNECT_URL, connectionpOptions)
.then(() => {
  const PORT = 3000;
  app.listen(PORT, ()=>{
    console.log(`app listening http://localhost:${PORT}`);
  });
  console.log('connection successfull')
})
.catch((err) => console.log(err));
