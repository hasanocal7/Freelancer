const { Freelancer } = require('../models');
const multer = require('multer');

exports.createFreelancer = async (req, res) => {
    try {
        if (req.file instanceof multer.MulterError) {
          console.error('Resim yüklenirken Multer kaynaklı hata oluştu');
          return res.status(400).send('Resim yüklenirken hata oluştu');
        } else if (!req.file) {
          console.error('Resim yüklenemedi veya eksik');
          return res.status(400).send('Lütfen bir resim yükleyin');
        }
    
        const imageFileName = '/uploads/' + req.file.filename;
    
        const freelancer = await Freelancer.create({
          ...req.body,
          image: imageFileName,
        });
    
        return res.redirect('/');
      } catch (error) {
        console.error(error);
        return res.status(500).send('Bir hata oluştu');
      }
};

exports.deleteFreelancer = (req, res) => {
  try {
    const id = req.params.id
    Freelancer.destroy({where: {id: id}});
    res.status(200).redirect('/');
  } catch (error) {
    res.status(400).send(error);
  }
}

exports.updateFreelancer = async (req, res) => {
    try {
      const id = req.params.id
      await Freelancer.update({...req.body}, {where: {id: id}});
      res.status(200).redirect('/');
    } catch (error) {
      res.status(400).send(error);
    }
}