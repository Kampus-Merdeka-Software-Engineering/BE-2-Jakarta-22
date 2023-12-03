require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const routes = require('./routes');
const Sequelize = require('./utils/sequelize')
const db = require('./db');
const morgan= requaire('morgan');

// import models
const { food } = require('./models');
const app = express();

const PORT = process.env.PORT || 5000;
// import router
const router = express.Router();


// import middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use((req, res, next) => {
  console.log(`Method: ${req.method} ${req.path}`);
  next();
});
app.use('/menus', menuRoutes);
app.use('/feedbacks', feedbackRoutes); // New route for feedbacks

routes.forEach((route) => app.use(route));

// inisialisasi server
app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  await startSequelize(sequalize);
});