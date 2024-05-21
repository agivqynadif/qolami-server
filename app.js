const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();
const port = 5000 || process.env.PORT;
const userRoutes = require('./src/routers/user-routes.js');
const scoreRoutes = require('./src/routers/score-routes.js');
const imageQuestionRoutes = require('./src/routers/image-question-routes.js');
const videoQuestionRoutes = require('./src/routers/video-question-routes.js');
const audioQuestionRoutes = require('./src/routers/audio-question-routes.js');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));

const apiDoc = require('./api-docs.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDoc));
app.use('/api/v1', userRoutes, imageQuestionRoutes, videoQuestionRoutes, audioQuestionRoutes);
app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/user', userRoutes, scoreRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('DATABASE CONNECTED');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
