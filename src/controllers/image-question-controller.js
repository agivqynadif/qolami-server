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
