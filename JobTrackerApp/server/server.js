import express from 'express'
import addJob from './addJob.js';

const app = express();
const PORT = 5020;

app.use(express.json());

app.post('/jobs', (req, res) => {
    // console.log(req.body)
    //req.body will hold the form data
    addJob(req);
    res.status(200).json({message: "Successfully grabbed form data and sent it to db"})
})

app.listen(PORT, () => console.log(`Connected to Port: ${PORT}`))
    .on('error', (err) => console.error('Failed to start server', err))