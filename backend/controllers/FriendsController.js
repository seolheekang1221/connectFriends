const { Friends } = require('../models');

const getAllFriends = async (req, res) => {
  try {
    const friends = await Friends.findAll();
    return res.status(200).json({ friends });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getFriendById = async (req, res) => {
  try {
    const { id } = req.params;
    const friend = await Friends.findByPk(id);
    if (friend) {
      return res.status(200).json({ friend });
    }
    return res.status(404).send('This friend does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteFriend = async (req, res) => {
  try {
    const deleted = await Friends.destroy({ where: { id: req.params.id } });
    if (deleted) {
      return res.status(200).send('User removed');
    }
    throw new Error('User not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//createFriend

module.exports = {
  getAllFriends,
  getFriendById,
  deleteFriend
};
