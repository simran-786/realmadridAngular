

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const mongoose = require('mongoose');

import express from 'express';
import bodyParser from 'body-parser';
import playersRoutes from './routes/players.js';


const app = express();

mongoose.connect('mongodb://localhost:27017/RealMadrid', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Mongodb connected...');
})
const PORT = 5000;

app.use(bodyParser.json());

// CORS HEADERS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "'");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
    next();
});

app.use('/players', playersRoutes);

app.get('/', (req, res) => {
    console.log('[TEST]!');

    res.send('Hello from Homepage.')
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));



