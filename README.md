# FileUpload
File Upload to MongoDB with Node.js

This project is a simple Node.js application that allows users to upload PDF files to a MongoDB database. It provides an API for file uploads and serves as a basic example of how to handle file storage and retrieval in a Node.js application.

## Table of Contents

1. [Project Description](#project-description)
2. [Features](#features)
3. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
4. [Usage](#usage)
5. [API Endpoints](#api-endpoints)
6. [Contributing](#contributing)
7. [Acknowledgments](#acknowledgments)

## Project Description

This project is designed to demonstrate the process of uploading PDF files to a MongoDB database using a Node.js application. Users can upload PDF files via a provided API, and the files are stored in the database along with their metadata.

## Features

- File upload to MongoDB
- Retrieval of uploaded files
- Basic error handling

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Before you begin, ensure you have the following software installed:

- Node.js and npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/chiragmakkar13/FileUpload.git
   ```

2. Navigate to the project folder:

   ```bash
   cd FileUpload
   ```

3. Install the dependencies:

   ```bash
   npm install express mongoose multer
   ```

4. Configure your MongoDB connection:
   
   - Open `app.js` and update the MongoDB connection string (`'mongodb://localhost:27017/fileUpload'`) with your own MongoDB connection string.

5. Start the Node.js server:

   ```bash
   node app.js
   ```
**Note- Recommended Version of Node is v18.18.0 or Higher**

## Usage

To upload a PDF file to MongoDB using this application:

Via Web Browser:

1.Start your Node.js server by running node app.js.

<img width="455" alt="image" src="https://github.com/ChiragMakkar13/FileUpload/assets/48089886/0d00c417-cd08-42c1-b0ce-e9762de59a46">

2.Open a web browser and navigate to your server's URL, which is likely http://localhost:3000/upload.html

<img width="356" alt="image" src="https://github.com/ChiragMakkar13/FileUpload/assets/48089886/0e6c0819-90f4-475a-9638-69f63873fb65">

3.You will see an input field that allows you to choose a PDF file from your local system. Select a PDF file and click the "Upload" button.

4.The file will be uploaded to the server, and you should see a response like "File uploaded successfully."

<img width="303" alt="image" src="https://github.com/ChiragMakkar13/FileUpload/assets/48089886/a9f36a45-54f3-4111-8376-ef3c0399ac77">

5. In Database you can see the files

<img width="1256" alt="image" src="https://github.com/ChiragMakkar13/FileUpload/assets/48089886/e4cdbd3c-15fc-43ea-ad6d-3b368776bd0f">



## API Endpoints

- **POST /upload**: Upload a PDF file to MongoDB.
- **GET /files/:id**: Retrieve a specific file by its ID.
- **GET /files**: Retrieve a list of all uploaded files.
  <img width="850" alt="image" src="https://github.com/ChiragMakkar13/FileUpload/assets/48089886/a643db4b-286e-420f-80a4-3cf866c9d41b">


## Contributing

Contributions are welcome! 


## Acknowledgments

- This project was inspired by the need for a simple file upload example.
- Special thanks to the Node.js and MongoDB communities for their valuable resources and documentation.

---
