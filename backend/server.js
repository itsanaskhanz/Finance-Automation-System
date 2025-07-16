require('dotenv').config();
require('./config/db');

const express = require('express');
const cors = require('cors');
const organizationRoutes = require('./routes/organizationRoutes');
const auth = require('./routes/authRoutes');


const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({
  origin: process.env.CORS_ORIGIN
}));
app.use(express.json());


app.use('/organization', organizationRoutes);
app.use('/auth', auth);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
