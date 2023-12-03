// routes/feedbackRoutes.js
const express = require('express');
const feedbackController = require('../controllers/feedbackControllers');
const router = express.Router();

router.get('/', feedbackController.getAllFeedbacks);
router.get('/:id', feedbackController.getFeedbackById);
router.post('/', feedbackController.createFeedback);
router.put('/:id', feedbackController.updateFeedback);
router.delete('/:id', feedbackController.deleteFeedback);

module.exports = router;
