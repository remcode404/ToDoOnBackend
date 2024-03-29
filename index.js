const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(cors());
app.use(require("./routes/todos.route"));
app.use(morgan("dev"));

const { PORT, MONGO_SERVER } = process.env;

const connectAndStartServer = async () => {
  try {
    await mongoose.connect(MONGO_SERVER);
    app.listen(PORT, () => {
      console.log(`Сервер запущен. Порт ${PORT}`);
    });
  } catch (error) {
    console.log(`Ошибка при соединении: ${e.toString()}`);
  }
};

connectAndStartServer();
