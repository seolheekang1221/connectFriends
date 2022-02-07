const { User } = require('../models');

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (user) {
      return res.status(200).json({ user });
    }
    return res.status(404).send('This user does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    await user.save();
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    let id = parseInt(req.params.id);
    const updatedUser = await User.update(req.body, {
      where: { id: id },
      returning: true
    });
    res.send(updatedUser);
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({ where: { id: req.params.id } });
    if (deleted) {
      return res.status(200).send('user removed');
    }
    throw new Error('User not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser
};
