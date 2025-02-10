import About from './About'
import Contact from './Contact'
import Display from './Display'
import { FaPlane } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import './App.css'

function App() {

 
  

  return (
    <>
      <nav className='nav'>
        <span ><img className='logo' src="https://tse4.mm.bing.net/th?id=OIP.BzkWp1CTb_B1ryyUhOivVgHaEK&pid=Api&P=0&h=180" alt="" /></span>
        <ul className='list'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Display</li>
          <li>Footer</li>
        </ul>
      </nav>
      <About/>
      <hr />
      <Contact/>

      
      <hr />
      <Display/>
      <section className='footer'>
        <h1>Footer Section</h1>
        <h2>2021 Nadine Coelho | All Rights Reserved</h2>
        <div> <FaPlane size={60} color='blue'  /> <FaTrash size={60} color='blue'  /> </div>
      </section>


    </>
  )
}

export default App
