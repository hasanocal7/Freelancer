const { Freelancer } = require('../models');

exports.getHomePage = async (req, res) => {
    const freelancers = await Freelancer.findAll();
    res.render('index', {
        freelancers
    });
};