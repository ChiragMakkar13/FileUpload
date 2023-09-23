// app.js
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const File = require('./models/file.model');

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/fileUpload', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Serve static files from the "uploads" folder
app.use('/uploads', express.static('uploads'));

// Route for uploading a PDF file
app.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    const { originalname, buffer, mimetype } = req.file;

    const file = new File({
      name: originalname,
      data: buffer,
      contentType: mimetype,
    });

    await file.save();
    res.status(201).send('File uploaded successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error uploading the file.');
  }
});


// Route to display a list of uploaded files
app.get('/files', async (req, res) => {
  try {
    const files = await File.find();
    res.send(files);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving files from the database.');
  }
});

// Route to display an individual file based on its ID
app.get('/files/:id', async (req, res) => {
  try {
    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).send('File not found');
    }

    // Send the file data as a response
    res.contentType(file.contentType);
    res.send(file.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving the file from the database.');
  }
});

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
