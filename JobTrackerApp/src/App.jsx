import { useState } from 'react'
import './components/css/main.css'
import './components/css/components.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header.jsx'
import MainPage from './pages/mainpage.jsx'
import SignUp from './pages/signuppage.jsx'
import LoginPage from './pages/loginpage.jsx'

function App() {


  return(
    <>
      <Router>
        <Routes>
          <Route element={<Header />}>
            <Route path='/' element={<MainPage />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/login' element={<LoginPage />}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
