const express = require('express');
const cors = require('cors');
const screenshotRouter = require('./routers/screenshotRouter');
const fileUpload = require("express-fileupload");
require('dotenv').config();

const app = express();

app.use(express.json());
 app.use(fileUpload());
app.use(cors());
app.use('/screenshot', screenshotRouter);

const start = async () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${process.env.PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();