import { Routes,Route } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Gallery from './components/Gallery'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Layout/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/galary' element={<Gallery/>} />

        </Route>
      </Routes>
    </>
  )
}

export default App
