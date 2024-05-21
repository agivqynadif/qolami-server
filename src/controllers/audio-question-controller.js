const { AudioQuestion } = require('../models/audio-question');

exports.insertAudioQuestion = async (req, res) => {
  const { title, subtitle, question, audio, options, correctIndex } = req.body;
  try {
    let newQuestion = new AudioQuestion({
      title,
      subtitle,
      question,
      audio,
      options,
      correctIndex,
    });
    newQuestion = await newQuestion.save();

    res.status(200).json({
      status: 'Sukses',
      message: 'Berhasil menambahkan soal!',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'Error',
      message: 'Terjadi error pada server',
    });
  }
};

exports.getLatihanFathahAudio = async (req, res) => {
  try {
    const latihanFathahVideo = await AudioQuestion.aggregate([{ $match: { title: 'Latihan 2' } }, { $sample: { size: 10 } }]);
    res.status(200).json({
      status: 'Sukses',
      message: 'Berhasil mendapatkan soal latihan Huruf Berharakat Fathah!',
      data: {
        latihanFathahVideo,
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
