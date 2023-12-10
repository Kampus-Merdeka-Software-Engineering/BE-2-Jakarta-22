// controllers/donationController.js
const donationService = require('../services/donationService');

exports.getAlldonations = async (req, res, next) => {
  try {
    const donations = await donationService.getAlldonations();
    res.json(donations);
  } catch (error) {
    next(error);
  }
};

exports.getdonationById = async (req, res, next) => {
  try {
    const donation = await donationService.getdonationById(req.params.id);
    res.json(donation);
  } catch (error) {
    next(error);
  }
};

exports.createdonation = async (req, res, next) => {
  try {
    const donation = await donationService.createdonation(req.body);
    res.json(donation);
  } catch (error) {
    next(error);
  }
};

exports.updatedonation = async (req, res, next) => {
  try {
    const updateddonation = await donationService.updatedonation(req.params.id, req.body);
    res.json(updateddonation);
  } catch (error) {
    next(error);
  }
};

exports.deletedonation = async (req, res, next) => {
  try {
    await donationService.deletedonation(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
