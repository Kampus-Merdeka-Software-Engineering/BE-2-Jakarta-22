// services/feedbackService.js
const db = require('../models/index');

exports.getAllFeedbacks = async () => {
  return await db.Feedback.findAll();
};

exports.getFeedbackById = async (id) => {
  return await db.Feedback.findByPk(id);
};

exports.createFeedback = async (feedbackData) => {
  return await db.Feedback.create(feedbackData);
};

exports.updateFeedback = async (id, feedbackData) => {
  await db.Feedback.update(feedbackData, {
    where: { id },
  });
  return await this.getFeedbackById(id);
};

exports.deleteFeedback = async (id) => {
  await db.Feedback.destroy({
    where: { id },
  });
};
