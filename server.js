const express = require('express');

const connectDB = require('./config/db');

const app = express();

//Connect to the DB
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    res.send('API running');
});

//Define routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/user', require('./routes/api/user'));
app.use('/api/room', require('./routes/api/rooms'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));