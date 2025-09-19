import { useState } from 'react'
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
    // console.log(isPopUp)
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
      {isPopUp && <AddJobForm isOpen={isPopUp} btnHandler={handlePopUp}/>}
    </>
  )
}

export default App
