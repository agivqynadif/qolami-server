const { Score } = require('../models/score');

exports.updateScore = async (req, res) => {
  const userId = req.params.userId;
  const updates = req.body;
  const options = { new: true };
  try {
    const score = await Score.findByIdAndUpdate(
      userId,
      {
        $set: {
          'scoreHijaiyah.scoreImage': updates.scoreImage,
          'scoreHijaiyah.scoreVideo': updates.scoreVideo,
          'scoreHijaiyah.scoreAudio': updates.scoreAudio,
          'scoreFathah.scoreImage': updates.scoreImage,
          'scoreFathah.scoreVideo': updates.scoreVideo,
          'scoreFathah.scoreAudio': updates.scoreAudio,
          'scoreKasrah.scoreImage': updates.scoreImage,
          'scoreKasrah.scoreVideo': updates.scoreVideo,
          'scoreKasrah.scoreAudio': updates.scoreAudio,
          'scoreDhammah.scoreImage': updates.scoreImage,
          'scoreDhammah.scoreVideo': updates.scoreVideo,
          'scoreDhammah.scoreAudio': updates.scoreAudio,
        },
      },
      options
    );
    res.status(200).json({
      status: 'Sukses',
      message: 'Score berhasil diupdate!',
      data: score,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'Error',
      message: 'Terjadi error pada server',
    });
  }
};

exports.getScore = async (req, res) => {
  const userId = req.params.userId;
  try {
    const score = await Score.findOne({ userId }).populate('userId', 'username');
    res.status(200).json({
      status: 'Sukses',
      message: 'Berhasil mendapatkan data score user!',
      data: {
        score,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'Error',
      message: 'Terjadi error pada server',
    });
  }
};
