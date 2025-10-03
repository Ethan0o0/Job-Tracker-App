import { useEffect, useState } from 'react'
import './components/css/main.css'
import './components/css/components.css'
import {HashRouter as Router, Routes, Route, useNavigate} from 'react-router-dom'
import Header from './components/header.jsx'
import MainPage from './pages/mainpage.jsx'
import SignUp from './pages/signuppage.jsx'
import LoginPage from './pages/loginpage.jsx'
import AddJobForm from './pages/addjobform.jsx'

function App() {

  const [isPopUp, setIsPopUp] = useState(false);
  const [jobData, setJobData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState("");
  const [getJobsState, setGetJobsState] = useState(0);

  const navigate = useNavigate();

  function handlePopUp(){
    setIsPopUp( (bool) => !bool);
  }

  useEffect(() => {
    if (localStorage.getItem('token')){
      isLoggedIn();
    }
  }, [])

  //getting data from database
  useEffect( () => {
    if (loggedIn){
      fetchJobs();
    }
  }, [loggedIn, getJobsState])


  async function isLoggedIn(){
    try{
      const response = await fetch('https://job-tracker-app-72g4.onrender.com/me', {
        headers: {'access-token': localStorage.getItem('token')},
        credentials: 'include'
      })
      if (!response.ok){
        throw new Error("HTTP Error! Status is", response.status)
      }
      const result = await response.json()
      if (result.name){
        setUserData(result.name);
        setLoggedIn(true);
      }
      return;
    }
    catch(e){
      console.log("Error caught for useEffect Login", e)
    }
  }

  async function handleLogOut(){
    // console.log("Reached Logout function")
    localStorage.removeItem('token');

    try {
      const response = await fetch('https://job-tracker-app-72g4.onrender.com/logout', {
        credentials: 'include'
      });
      if (!response.ok){
        throw new Error("HTTP Error! Status is", response.status)
      }
      const result = await response.json()
      setLoggedIn(false);
      navigate('/')
      setJobData([])

    }
    catch(e){
      console.log("Could not logout due to error", e);
    }
  }

  const fetchJobs = async (filterOption) => {

    if (!loggedIn){
      return;
    }

    try{

      if (filterOption && filterOption !== 'all'){
        const response = await fetch(`https://job-tracker-app-72g4.onrender.com/jobs/${filterOption}`, {
          headers: {'access-token': localStorage.getItem('token')},
          credentials: 'include'
        });
        if (!response.ok){
          throw new Error("HTTP Error! Status is", response.status)
        }
        const result = await response.json()
        setJobData(result)
      }
      else {

        const response = await fetch(`https://job-tracker-app-72g4.onrender.com/jobs`, {
          headers: {'access-token': localStorage.getItem('token')},
          credentials: 'include'
        });
        if (!response.ok){
          throw new Error("HTTP Error! Status is", response.status)
        }
        const result = await response.json()
        setJobData(result)
      }
    }
    catch(e){
      console.log("Error", e);
    }
  }


  //sending the formdata to the backend
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const objectFormData = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('https://job-tracker-app-72g4.onrender.com/jobs', {
        method: 'POST',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          'access-token': localStorage.getItem('token')
        },
        body: JSON.stringify(objectFormData)
      })

      if (!response.ok){
        throw new Error('HTTP error')
      }

      const result = await response.json();
      console.log('Success:', result);
      setIsPopUp(false)
      setGetJobsState( (num) => num + 1);
      await fetchJobs()
    }
    catch(e){
      console.log(`Error:`, e);
    }

  }

  //updating status
  async function updateStatus(data, currStatus){
    try {
      const response = await fetch(`https://job-tracker-app-72g4.onrender.com/jobs/${data.id}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          'access-token': localStorage.getItem('token')
        },
        body: JSON.stringify({...data, status: currStatus})
      })

      if (!response.ok){
        throw new Error('HTTP error')
      }

      const result = await response.json();
      console.log('Success:', result);
    }
    catch(e){
      console.log(`Error:`, e);
    }
  }

  //deleting the job
  async function deleteJob(currId){
    try {
      console.log(currId)
      const response = await fetch(`https://job-tracker-app-72g4.onrender.com/jobs/${currId}`, {
        headers: {'access-token': localStorage.getItem('token')},
        method: 'DELETE',
        credentials: 'include'
      })

      if (!response.ok){
        throw new Error('HTTP error')
      }

      const result = await response.json();
      console.log('Success:', result);

      // setJobData( (prevJobData) => prevJobData.filter(job => job.id !== currId));
      await fetchJobs();
    }
    catch(e){
      console.log(`Error:`, e);
    }
  }

  //for handling signup info
  const handleSignup = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const objectFormData = Object.fromEntries(formData.entries())
    const {name, email, password, confirmPassword} = objectFormData;
    const signUpData = {name, email, password};

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return; // stop execution
    }

    try {
      const response = await fetch('https://job-tracker-app-72g4.onrender.com/signup', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify(signUpData)
      })

      if (!response.ok){
        throw new Error('HTTP error')
      }

      const result = await response.json();
      console.log('Success in signing up:', result);
      navigate('/login')

    }
    catch(e){
      console.log(`Error:`, e);
    }

  }

  const handleSignIn = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const objectFormData = Object.fromEntries(formData.entries())
    const {email, password} = objectFormData;
    const loginData = {email, password}

    try {
      const response = await fetch('https://job-tracker-app-72g4.onrender.com/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(loginData)
      })

      if (!response.ok){
        throw new Error('HTTP error')
      }

      const result = await response.json();
      if (!result){
        alert("Invalid Login");
        return;
      }
      //change the frontend to list the name and values
      setUserData(result.name);
      localStorage.setItem('token', result.token)
      setLoggedIn(true);
      navigate('/')
      await fetchJobs();

    }
    catch (e){
      console.log("Error caught: ", e);
    }
  }



  return(
    <>
      <Routes>
        <Route element={<Header isLoggedIn={loggedIn} user={userData} logOut={handleLogOut}/>}>
          <Route path='/' element={<MainPage 
            addJobBtn={handlePopUp}
            jobs={jobData}
            status={updateStatus}
            delete={deleteJob}
            filter={fetchJobs}
            isLoggedIn={loggedIn}
          />}/>
          <Route path='/signup' element={<SignUp submit={handleSignup}/>}/>
          <Route path='/login' element={<LoginPage submit={handleSignIn} />}/>
        </Route>
      </Routes>
    {isPopUp && <AddJobForm isOpen={isPopUp} btnHandler={handlePopUp} submit={handleSubmit}/>}
    </>
  )
}

export default App
