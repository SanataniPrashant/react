

import { Routes, Route } from 'react-router-dom'
import './App.css'
import Services from './components/Services'
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'



function App() {


  return (
    <>

<Routes>
  <Route path="/" element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path='/home' element= {<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/services' element={<Services/>}/>
  </Route>

</Routes>

      
    </>
  )
}

export default App
