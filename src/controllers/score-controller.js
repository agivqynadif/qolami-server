const { ObjectId } = require('mongodb');
const { Score } = require('../models/score');

exports.updateScore = async (req, res) => {
  const userId = req.params.userId;
  const updates = req.body;
  const options = { new: true };
  try {
    const score = await Score.findOneAndUpdate({ userId: userId }, updates, options);
    res.status(200).json({
      message: 'Score berhasil diupdate!',
      data: score,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi error pada server' });
  }
};

exports.getUserScore = async (req, res) => {
  const userId = req.params.userId;
  try {
    const score = await Score.findOne({ userId }).populate('userId', 'username');
    res.status(200).json({
      message: 'Berhasil mendapatkan data score user!',
      data: {
        score,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi error pada server' });
  }
};
