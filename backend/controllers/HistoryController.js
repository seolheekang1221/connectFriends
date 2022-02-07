const { History } = require('../models');

const getAllHistory = async (req, res) => {
  try {
    const history = await Favorite.findAll();
    return res.status(200).json({ history });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllHistory
};
