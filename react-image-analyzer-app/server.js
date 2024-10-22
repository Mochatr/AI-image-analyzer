// Create a simple express server
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const multer = require('multer');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
require('dotenv').config();

app.use('/', (req, res) => {
    res.send('Hello, World');
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});