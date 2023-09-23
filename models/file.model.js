// models/file.model.js
const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
  contentType: String,
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
