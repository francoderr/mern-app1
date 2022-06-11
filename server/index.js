import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();


app.use(bodyParser.json({ limit : "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit : "30mb", extended: true }));
app.use(cors());
app.use('/posts', postRoutes);



//setting up connection to the database
const CONNECTION_URL = 'mongodb+srv://korra:GT34wera@cluster0.x3nbi.mongodb.net/?retryWrites=true&w=majority';             //insert string from mongodb atlas
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on: ${PORT}`)))
    .catch((error)  => console.log(error.message));

// mongoose.set('useFindAndModifsy', false);

// app.listen(PORT, () => console.log(`Server running on: ${PORT}`));