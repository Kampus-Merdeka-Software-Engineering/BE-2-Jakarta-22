app.get('/donations', async (req, res) => {
    try {
       const donations = await donationService.getAll();
       res.status(200).json(donations);
    } catch (error) {
       res.status(500).json({ error: 'Failed to fetch donations' });
    }
   });
   
   app.post('/donations', async (req, res) => {
    try {
       const donation = await donationService.create(req.body);
       res.status(201).json(donation);
    } catch (error) {
       res.status(500).json({ error: 'Failed to create donation' });
    }
   });
   
   app.delete('/donations/:id', async (req, res) => {
    try {
       await donationService.delete(req.params.id);
       res.status(204).end();
    } catch (error) {
       res.status(500).json({ error: 'Failed to delete donation' });
    }
   });