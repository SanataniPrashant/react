import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Form from './Form'
import Home from './Home'
import Login from './Login'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path='/form' element={<Form />} />
        <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
