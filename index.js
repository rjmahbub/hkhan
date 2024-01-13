require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/users.route");
const productRouter = require("./routes/products.route");

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(productRouter);

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

/* const kittySchema = new mongoose.Schema({
  name: String,
  phone: String,
  password: String,
  created_at: Date.now()
});

const Kitten = mongoose.model('user', kittySchema);

const silence = new Kitten({ name: 'Mahbub Alam', phone: '01789050186', password: '' });
silence.save(); */