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

  function handlePopUp(){
    setIsPopUp( (bool) => !bool);
  }

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
            <Route path='/' element={<MainPage addJobBtn={handlePopUp}/>}/>
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
