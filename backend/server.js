const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
const dotenv = require('dotenv');
const dogRouter = require('./routes/dogs');
const authRoutes = require('./routes/auth')

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use('/dogs', dogRouter);
app.use('/auth', authRoutes);

mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('Connected to Database'))
    .catch((error) => console.error('Database connection error:', error));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
