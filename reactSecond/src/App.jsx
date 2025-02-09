import Navbar from "./Navbar"
import Card from "./Card"
import myimg from "./t.jpg"
import {useRef} from "react"
function App() {

  let para = {
    color:"green",
    fontSize:40,
  }

  const myRef = useRef("");

  const myval =()=>{
    myRef.current.style.color="red"
    myRef.current.style.border="2px solid black"
    myRef.current.style.padding="20px"
  }

  const oneRef = useRef("");

  const myfirst =()=>{
    oneRef.current.style.color="red"
    oneRef.current.style.border="2px solid black"
    oneRef.current.style.padding="20px"
  }

  const mySecond =()=>{
    oneRef.current.style.backgroundColor="yellow"
  }

  const myThird =()=>{
    oneRef.current.style.fontSize="70px"
  }
 
  return (
    <>
  <button onClick={myval}>click</button>
    <div>
    <h1 ref={myRef}>dfghjk</h1>
    </div>


    <button onClick={myfirst}>click1</button>
    <button onClick={mySecond}>click2</button>
    <button onClick={myThird}>click3</button>

    <div><h1 ref={oneRef}>Welcome to Cybrom</h1></div>
    <Navbar />

    <hr />

    <section style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly", alignItems:"center"}}>
      <h1 style={para}>Welcome to my website</h1>
      <h2>app to aaye par aap na aaye</h2>
      <div>
        <img style={{width:"500px",height:"500px",border:"2px solid black",borderRadius:"50%"}} src={myimg} alt="my image" />
      </div>
    </section>

    <hr />
      <div style={{backgroundColor:"black"}}>
      <h1 style={{color:"yellow" }}>radhe radhe</h1>
      </div>

      <hr />

      <section style={{display:"grid",gridTemplateColumns:"auto auto auto auto"}}>
    <Card/>
      </section>
      <hr />
      <p style={{color:"blue", fontSize:"22px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />A provident facere recusandae? Neque sunt adipisci iusto fuga ipsam. Iste illo velit eius tempore natus aut repellendus,<br /> odit corporis excepturi consequatur.</p>
      <p style={para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus debitis molestiae ullam? Sed deserunt magnam omnis nulla, praesentium saepe eaque repellat in possimus dolorem ipsum, quisquam accusamus magni consequuntur libero?</p>

      <section>
        <div>
          <img style={{width:"200px"}} src="/th.jpg" alt="" />
          <hr />
          <img style={{width:"200px"}} src="/src/t.jpg" alt="" />
          <hr />
          <img style={{width:"200px"}} src={myimg} alt="" />
        </div>
      </section>

      
    </>
  )
}

export default App
