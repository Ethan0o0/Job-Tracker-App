import express from 'express'
import addJob from './addJob.js';
import getJobs from './getJobs.js';
import updateStatus from './updateStatus.js';
import deleteJob from './deleteJob.js';
import getJobsByFilter from './getJobsByFilter.js';
import addUser from './addUser.js';
import checkUsers from './checkUsers.js';
import session from 'express-session'
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors'

const app = express();
const PORT = 5020;

app.use(cors({
    origin: '*', 
    credentials: true, 
  }));

app.use(express.json());

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        http: true,
        secure: false,
        sameSite: 'lax'
    }
}))

app.post('/jobs', (req, res) => {
    //req.body will hold the form data
    addJob(req);
    res.status(200).json({message: "Successfully grabbed form data and sent it to db"})
})

app.get('/jobs/:id', async (req, res) => {
    const data = await getJobs(req);
    // console.log(data);
    res.status(200).json(data)
})

app.get('/jobs/:filter/:id', async (req, res) => {
    const data = await getJobsByFilter(req);
    res.status(200).json(data)
})

app.put('/jobs/:id', (req, res) =>{
    updateStatus(req)
    res.status(200).json({message: "Successfully updated data and sent it to db"})
})

app.delete('/jobs/:id', (req, res) => {
    deleteJob(req)
    res.status(200).json({message: "Successfully deleted"})
})

app.post('/signup', (req, res) => {
    addUser(req)
    res.status(200).json({message: "Added the user to the credentials table successfully"})
})

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.json({message: "Logged Out"})
})

app.post('/login', async (req, res) => {
    const isValidUser = await checkUsers(req);
    res.status(200).json(isValidUser);
})

app.get('/me', (req, res) => {
    if (req.session.user_id){
        res.json({id: req.session.user_id, name: req.session.name})
    }
    else{
        res.json({user: null});
    }
})


app.listen(PORT, () => console.log(`Connected to Port: ${PORT}`))
    .on('error', (err) => console.error('Failed to start server', err))