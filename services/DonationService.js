'use strict';
const { Donation } = require('../models/Donation');

async function getDonation(id) {
 const donation = await Donation.findByPk(id);
 return donation;
}

async function createDonation(donation) {
 const newDonation = await Donation.create(donation);
 return newDonation;
}

async function updateDonation(id, updatedData) {
 const donation = await getDonation(id);
 if (!donation) return null;

 await donation.update(updatedData);
 return donation;
}

async function deleteDonation(id) {
 const donation = await getDonation(id);
 if (!donation) return null;

 await donation.destroy();
 return donation;
}

module.exports = {
 getDonation,
 createDonation,
 updateDonation,
 deleteDonation,
};