'use strict';
const { getDonation, createDonation, updateDonation, deleteDonation } = require('./services/donationService');

async function getDonationById(req, res) {
 try {
    const donation = await getDonation(req.params.id);
    if (!donation) return res.status(404).send({ message: 'Donation not found' });

    res.status(200).send(donation);
 } catch (error) {
    res.status(500).send({ message: 'Error getting donation' });
 }
}

async function createDonation(req, res) {
 try {
    const newDonation = await createDonation(req.body);
    res.status(201).send(newDonation);
 } catch (error) {
    res.status(500).send({ message: 'Error creating donation' });
 }
}

async function updateDonation(req, res) {
 try {
    const updatedDonation = await updateDonation(req.params.id, req.body);
    if (!updatedDonation) return res.status(404).send({ message: 'Donation not found' });

    res.status(200).send(updatedDonation);
 } catch (error) {
    res.status(500).send({ message: 'Error updating donation' });
 }
}

async function deleteDonation(req, res) {
 try {
    const deletedDonation = await deleteDonation(req.params.id);
    if (!deletedDonation) return res.status(404).send({ message: 'Donation not found' });

    res.status(200).send(deletedDonation);
 } catch (error) {
    res.status(500).send({ message: 'Error deleting donation' });
 }
}

module.exports = {
 getDonationById,
 createDonation,
 updateDonation,
 deleteDonation,
};