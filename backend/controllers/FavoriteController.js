const { User } = require('../models');

const getAllFavorite = async (req, res) => {
  try {
    const favorites = await User.findAll();
    return res.status(200).json({ favorites });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getFavoriteById = async (req, res) => {
  try {
    const { id } = req.params;
    const favorite = await User.findByPk(id);
    if (favorite) {
      return res.status(200).json({ favorite });
    }
    return res.status(404).send('This favorite does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllFavorite,
  getFavoriteById
};
