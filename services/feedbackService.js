// services/FeedbackService.js
const  Feedback = require('../models/feedback');

exports.getAllFeedbacks = async () => {
  return await Feedback.findAll();
};

exports.getFeedbackById = async (id) => {
  return await Feedback.findByPk(id);
};

exports.createFeedback = async (FeedbackData) => {
  return await Feedback.create(FeedbackData);
};

exports.updateFeedback = async (id, FeedbackData) => {
  await Feedback.update(FeedbackData, {
    where: { id },
  });
  return await this.getFeedbackById(id);
};

exports.deleteFeedback = async (id) => {
  await Feedback.destroy({
    where: { id },
  });
};
