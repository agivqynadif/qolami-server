const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();
const port = 5000 || process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));

const apiDoc = require('./api-docs.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDoc));

require('./src/routers/routes.js')(app);

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
