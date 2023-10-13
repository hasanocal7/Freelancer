const { Freelancer } = require('../models');

exports.createFreelancer = async (req, res) => {
    try {
        const freelancer = await Freelancer.create(req.body)
        console.log('Create freelancer successfuly')
        res.status(201).redirect('/');   
    } catch (error) {
        res.status(400).send(error)
    }
}