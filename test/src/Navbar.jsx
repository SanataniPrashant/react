import './App.css'
import { IoMdHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { IoIosContact } from "react-icons/io";
const Navbar = ()=>{
    return (
        <>
        <div className="nav">
        <img style={{height:"80px", width:"80px", borderRadius:"50%"}} src="https://tse1.mm.bing.net/th?id=OIP.4rZ4ZPxFnT6vMCad7bnPugHaHa&pid=Api&P=0&h=180" alt="" />
        <ul className='list'>
        <li>Home <IoMdHome /></li>
        <li>About <FcAbout /> </li>
        <li>Contact <IoIosContact /> </li>
        </ul>
        </div>
        </>
    )
}
export default Navbar