const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  filename: String,
  contentType: String,
  content: Buffer,
  userEmail: String
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
