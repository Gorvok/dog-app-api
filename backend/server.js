const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const dogRouter = require('./routes/dogs');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('Connected to Database'))
    .catch((error) => console.error('Database connection error:', error));

app.use('/dogs', dogRouter);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
