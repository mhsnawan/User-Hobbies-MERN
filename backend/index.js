const express = require('express');
const config = require('config');
const app = express();
const PORT = process.env.PORT || 8000;
const connectDb = require('./config/db');

app.use(express.json({ extended: false }));
connectDb();
app.use('/api/v1', require('./routes/api/userRoute'));
app.use('/api/v1', require('./routes/api/hobbyRoute'));

app.listen(PORT, ()=> {
    console.log(`Server working on ${PORT}`);
});
