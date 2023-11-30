const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();
const { User, Feedback } = require('../models');

router.get('/:id', async (req, res) => {
 try {
    const feedback = await Feedback.findByPk(req.params.id);
    if (!feedback) {
      return res.status(404).send({
        message: "Feedback not found with id " + req.params.id,
      });
    }
    res.status(200).send(feedback);
 } catch (error) {
    res.status(500).send({
      message: "Error retrieving feedback with id " + req.params.id,
    });
 }
});

router.post('/', async (req, res) => {
 try {
    const feedback = await Feedback.create(req.body);
    res.status(201).send(feedback);
 } catch (error) {
    res.status(500).send({
      message: "Error creating feedback",
    });
 }
});

router.delete('/:id', async (req, res) => {
 try {
    const feedback = await Feedback.findByPk(req.params.id);
    if (!feedback) {
      return res.status(404).send({
        message: "Feedback not found with id " + req.params.id,
      });
    }
    await feedback.destroy();
    res.status(200).send(feedback);
 } catch (error) {
    res.status(500).send({
      message: "Error deleting feedback with id " + req.params.id,
    });
 }
});

module.exports = router;