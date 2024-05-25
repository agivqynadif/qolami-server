const { ImageQuestion } = require('../models/image-question');

exports.insertImageQuestion = async (req, res) => {
  const { title, subtitle, question, options, correctIndex } = req.body;
  try {
    let newQuestion = new ImageQuestion({
      title,
      subtitle,
      question,
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

exports.getLatihanHijaiyahImage = async (req, res) => {
  try {
    const latihanHijaiyahImage = await ImageQuestion.aggregate([{ $match: { title: 'Latihan 1' } }, { $sample: { size: 10 } }]);
    res.status(200).json({
      status: 'Sukses',
      message: 'Berhasil mendapatkan soal latihan Huruf Hijaiyah!',
      data: {
        latihanHijaiyahImage,
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

exports.getLatihanFathahImage = async (req, res) => {
  try {
    const latihanFathahImage = await ImageQuestion.aggregate([{ $match: { title: 'Latihan 2' } }, { $sample: { size: 10 } }]);
    res.status(200).json({
      status: 'Sukses',
      message: 'Berhasil mendapatkan soal latihan Huruf Berharakat fathah!',
      data: {
        latihanFathahImage,
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

exports.getLatihanKasrahImage = async (req, res) => {
  try {
    const latihanKasrahImage = await ImageQuestion.aggregate([{ $match: { title: 'Latihan 3' } }, { $sample: { size: 10 } }]);
    res.status(200).json({
      status: 'Sukses',
      message: 'Berhasil mendapatkan soal latihan Huruf Berharakat Kasrah!',
      data: {
        latihanKasrahImage,
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

exports.getLatihanDhammahImage = async (req, res) => {
  try {
    const latihanDhammahImage = await ImageQuestion.aggregate([{ $match: { title: 'Latihan 4' } }, { $sample: { size: 10 } }]);
    res.status(200).json({
      status: 'Sukses',
      message: 'Berhasil mendapatkan soal latihan Huruf Berharakat Dhammah!',
      data: {
        latihanDhammahImage,
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
