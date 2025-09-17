import { useState } from 'react'
import './components/css/main.css'
import './components/css/components.css'
import Header from './components/header.jsx'
import AddJob from './components/addjob.jsx'
import JobTable from './components/jobtable.jsx'

function App() {


  return(
    <>
      <Header />
      <AddJob />
      <JobTable />
    </>
  )
}

export default App
