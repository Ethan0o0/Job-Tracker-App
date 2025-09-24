import express from 'express'
import addJob from './addJob.js';
import getJobs from './getJobs.js';
import updateStatus from './updateStatus.js';
import deleteJob from './deleteJob.js';
import getJobsByFilter from './getJobsByFilter.js';

const app = express();
const PORT = 5020;

app.use(express.json());

app.post('/jobs', (req, res) => {
    // console.log(req.body)
    //req.body will hold the form data
    addJob(req);
    res.status(200).json({message: "Successfully grabbed form data and sent it to db"})
})

app.get('/jobs', async (req, res) => {
    const data = await getJobs();
    // console.log(data);
    res.status(200).json(data)
})

app.get('/jobs/:filter', async (req, res) => {
    const data = await getJobsByFilter(req);
    res.status(200).json(data)
})

app.put('/jobs/:id', (req, res) =>{
    updateStatus(req)
    res.status(200).json({message: "Successfully updated data and sent it to db"})
})

app.delete('/jobs/:id', (req, res) => {
    deleteJob(req)
})

app.listen(PORT, () => console.log(`Connected to Port: ${PORT}`))
    .on('error', (err) => console.error('Failed to start server', err))