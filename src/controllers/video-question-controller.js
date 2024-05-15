const { VideoQuestion } = require('../models/video-question');

exports.insertVideoQuestion = async (req, res) => {
  const { title, subtitle, question, videoId, options, correctIndex } = req.body;
  try {
    let newQuestion = new VideoQuestion({
      title,
      subtitle,
      question,
      videoId,
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

exports.getLatihanFathahVideo = async (req, res) => {
  try {
    const latihanFathahVideo = await VideoQuestion.aggregate([{ $match: { title: 'Latihan 2' } }, { $sample: { size: 10 } }]);
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

exports.getLatihanKasrahVideo = async (req, res) => {
  try {
    const latihanKasrahVideo = await VideoQuestion.aggregate([{ $match: { title: 'Latihan 3' } }, { $sample: { size: 10 } }]);
    res.status(200).json({
      status: 'Sukses',
      message: 'Berhasil mendapatkan soal latihan Huruf Berharakat Kasrah!',
      data: {
        latihanKasrahVideo,
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

exports.getLatihanDhammahVideo = async (req, res) => {
  try {
    const latihanDhammahVideo = await VideoQuestion.aggregate([{ $match: { title: 'Latihan 4' } }, { $sample: { size: 10 } }]);
    res.status(200).json({
      status: 'Sukses',
      message: 'Berhasil mendapatkan soal latihan Huruf Berharakat Dhammah!',
      data: {
        latihanDhammahVideo,
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
