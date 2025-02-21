import { Link } from "react-router-dom"


const Navbar =()=>{
    return(
        <>
        <div style={{backgroundColor:"orange", border:"2px solid black", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", gap:"50px"}}>
            <h1>Logo</h1>
            <ul style={{ display:"flex", flexDirection:"row", listStyleType:"none", textDecoration:"none" , alignItems:"center", justifyContent:"center", gap:"50px", fontSize:"22px"}}>
                <li><Link style={{textDecoration:"none"}} to="/home">Home</Link></li>
                <li><Link style={{textDecoration:"none"}} to="/about">About</Link></li>
                <li><Link style={{textDecoration:"none"}} to="/services">Services</Link></li>
            </ul>
        </div>
        </>
    )
}
export default Navbar