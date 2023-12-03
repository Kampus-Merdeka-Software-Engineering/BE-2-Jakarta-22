// services/DonationService.js
class DonationService {
    constructor(donationModel) {
       this.donationModel = donationModel;
    }
   
    async getAll() {
       return await this.donationModel.findAll();
    }
   
    async create(donation) {
       return await this.donationModel.create(donation);
    }
   
    async delete(id) {
       return await this.donationModel.destroy({ where: { id } });
    }
}
   
module.exports = DonationService;
