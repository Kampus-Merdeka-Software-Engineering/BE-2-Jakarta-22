require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const sequelize = require('./utils/sequelize')
const db = require('./models/db');
const app = express();
const fs = require('fs');

const donation = require('./routes/donation');
//Inisialisasi server express
const PORT = process.env.PORT || 5000;

// import router
const routes = express.Router();

// import middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Mendefinisikan middleware untuk log pemanggilan HTTP:
app.use((req, res, next) => {
  console.log(`Method: ${req.method} ${req.path}`);
  next();
});

//Menambahkan semua rute yang telah didefinisikan ke dalam server express:
fs.readdirSync('./routes')
routes.forEach((routes) => app.use(routes));

//Menjalankan server dan menghubungkannya dengan basis data:
app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  await startSequelize(sequalize);
});