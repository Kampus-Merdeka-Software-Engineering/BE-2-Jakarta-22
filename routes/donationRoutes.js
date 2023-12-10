// routes/donationRoutes.js
const express = require('express');
const donationController = require('../controllers/donationController');
const router = express.Router();

//Mengembalikan daftar seluruh donation yang ada.
router.get('/', donationController.getAlldonations);
//Mengembalikan donation dengan id yang telah ditentukan.
router.get('/:id', donationController.getdonationById);
//Membuat feedback baru.
router.post('/', donationController.updatedonation);
//Menghapus donation dengan id yang telah ditentukan.
router.delete('/:id', donationController.deletedonation);

module.exports =  router;