import Navbar from "./Navbar"

function App() {

  let para = {
    color:"green",
    fontSize:20,
  }

  return (
    <>
    <Navbar />
      <div style={{backgroundColor:"black"}}>
      <h1 style={{color:"yellow" }}>radhe radhe</h1>
      </div>

      <hr />

      <p style={{color:"blue", fontSize:"22px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />A provident facere recusandae? Neque sunt adipisci iusto fuga ipsam. Iste illo velit eius tempore natus aut repellendus,<br /> odit corporis excepturi consequatur.</p>
      <p style={para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus debitis molestiae ullam? Sed deserunt magnam omnis nulla, praesentium saepe eaque repellat in possimus dolorem ipsum, quisquam accusamus magni consequuntur libero?</p>
    </>
  )
}

export default App
