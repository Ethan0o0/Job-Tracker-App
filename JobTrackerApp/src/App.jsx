import { useEffect, useState } from 'react'
import './components/css/main.css'
import './components/css/components.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header.jsx'
import MainPage from './pages/mainpage.jsx'
import SignUp from './pages/signuppage.jsx'
import LoginPage from './pages/loginpage.jsx'
import AddJobForm from './pages/addjobform.jsx'

function App() {

  const [isPopUp, setIsPopUp] = useState(false);
  const [jobData, setJobData] = useState([]);

  function handlePopUp(){
    setIsPopUp( (bool) => !bool);
  }

  //getting data from database
  useEffect( () => {
    fetchJobs();
  }, [])

  const fetchJobs = async (filterOption) => {

    try{

      if (filterOption && filterOption !== 'all'){
        const response = await fetch(`/jobs/${filterOption}`);
        if (!response.ok){
          throw new Error("HTTP Error! Status is", response.status)
        }
        const result = await response.json()
        setJobData(result)
      }
      else {
        const response = await fetch('/jobs');
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

  // async function handleFilter(filterOption){
  //   try {
  //     const response = await fetch(`/jobs/${filterOption}`, {
  //       method: 'POST'
  //     })
  //     if (!response.ok){
  //       throw new Error('HTTP ERROR')
  //     }
  //     const result = await response.json();
  //     console.log("Successfully Filtered", result);
  //     await fetchJobs();
  //   }
  //   catch (e){
  //     console.log('Error recieved:', e)
  //   }
  // }


  //sending the formdata to the backend
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const objectFormData = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/jobs', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(objectFormData)
      })

      if (!response.ok){
        throw new Error('HTTP error')
      }

      const result = await response.json();
      console.log('Success:', result);
      setIsPopUp(false)
      await fetchJobs()
    }
    catch(e){
      console.log(`Error:`, e);
    }

  }

  //updating status
  async function updateStatus(data, currStatus){
    try {
      const response = await fetch(`/jobs/${data.id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
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
      const response = await fetch(`/jobs/${currId}`, {
        method: 'DELETE',
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

  return(
    <>
      <Router>
        <Routes>
          <Route element={<Header />}>
            <Route path='/' element={<MainPage 
              addJobBtn={handlePopUp}
              jobs={jobData}
              status={updateStatus}
              delete={deleteJob}
              filter={fetchJobs}
            />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/login' element={<LoginPage />}/>
          </Route>
        </Routes>
      </Router>
      {isPopUp && <AddJobForm isOpen={isPopUp} btnHandler={handlePopUp} submit={handleSubmit}/>}
    </>
  )
}

export default App
