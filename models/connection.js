const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://melineco:wXeQSA3xvl2QlerI@cluster0.yci51gp.mongodb.net/weatherapp';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
