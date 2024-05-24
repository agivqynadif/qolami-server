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

exports.getLatihanHijaiyahAudio = async (req, res) => {
  try {
    const latihanHijaiyahAudio = await AudioQuestion.aggregate([{ $match: { title: 'Latihan 1' } }, { $sample: { size: 10 } }]);
    res.status(200).json({
      status: 'Sukses',
      message: 'Berhasil mendapatkan soal latihan Huruf Hijaiyah!',
      data: {
        latihanHijaiyahAudio,
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

exports.getLatihanFathahAudio = async (req, res) => {
  try {
    const latihanFathahAudio = await AudioQuestion.aggregate([{ $match: { title: 'Latihan 2' } }, { $sample: { size: 10 } }]);
    res.status(200).json({
      status: 'Sukses',
      message: 'Berhasil mendapatkan soal latihan Huruf Berharakat Fathah!',
      data: {
        latihanFathahAudio,
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

exports.getLatihanKasrahAudio = async (req, res) => {
  try {
    const latihanKasrahAudio = await AudioQuestion.aggregate([{ $match: { title: 'Latihan 3' } }, { $sample: { size: 10 } }]);
    res.status(200).json({
      status: 'Sukses',
      message: 'Berhasil mendapatkan soal latihan Huruf Berharakat Kasrah!',
      data: {
        latihanKasrahAudio,
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

exports.getLatihanDhammahAudio = async (req, res) => {
  try {
    const latihanDhammahAudio = await AudioQuestion.aggregate([{ $match: { title: 'Latihan 4' } }, { $sample: { size: 10 } }]);
    res.status(200).json({
      status: 'Sukses',
      message: 'Berhasil mendapatkan soal latihan Huruf Berharakat Dhammah!',
      data: {
        latihanDhammahAudio,
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
