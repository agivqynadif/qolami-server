const { Score } = require('../models/score');

exports.updateScore = async (req, res) => {
  const userId = req.params.userId;
  const updates = req.body;
  const options = { new: true };
  try {
    const score = await Score.findOneAndUpdate({ userId: userId }, { $set: updates }, options);
    res.status(200).json({
      status: 'Sukses',
      message: 'Score berhasil diubah!',
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
    const score = await Score.findOne({ userId });
    res.status(200).json({
      status: 'Sukses',
      message: 'Berhasil mendapatkan data score user!',
      data: {
        score: {
          scoreHijaiyah: {
            scoreImage: score.scoreHijaiyahImage,
            scoreVideo: score.scoreHijaiyahVideo,
            scoreAudio: score.scoreHijaiyahAudio,
          },
          scoreFathah: {
            scoreImage: score.scoreFathahImage,
            scoreVideo: score.scoreFathahVideo,
            scoreAudio: score.scoreFathahAudio,
          },
          scoreKasrah: {
            scoreImage: score.scoreKasrahImage,
            scoreVideo: score.scoreKasrahVideo,
            scoreAudio: score.scoreKasrahAudio,
          },
          scoreDhammah: {
            scoreImage: score.scoreDhammahImage,
            scoreVideo: score.scoreDhammahVideo,
            scoreAudio: score.scoreDhammahAudio,
          },
        },
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
