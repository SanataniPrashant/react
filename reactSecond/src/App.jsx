import Navbar from "./Navbar"
import Card from "./Card"
import myimg from "./t.jpg"

function App() {

  let para = {
    color:"green",
    fontSize:40,
  }

  return (
    <>
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
