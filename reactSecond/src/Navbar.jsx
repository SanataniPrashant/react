import "./App.css"
const Navbar= ()=>{
    return(
        <>
        <div className="navbar">
            <h1>Navbar</h1>
            <ul style={{display:"flex", flexDirection:"row", gap:"90px", textDecoration:"none", alignItems:"center", fontSize:"22px",listStyleType:"none"}}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Data</li>
            </ul>
        </div>
        </>
    )
}

export default Navbar