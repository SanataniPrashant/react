import { useState } from "react"

const Bg = ()=>{

    const [color, setColor] = useState("red")
    const [bg, setBg] = useState("block")
    const [Tg, setTg] = useState(true)

    // const coolor1 =()=>{
    //     setColor("blue")
    // }

    // const coolor2 =()=>{
    //     setColor("green")
    // }

    // const coolor3 =()=>{
    //     setColor("yellow")
    // }
    // const coolor4 =()=>{
    //     setColor("black")
    // }
    // const coolor5 =()=>{
    //     setColor("orange")
    // }
    return(

        <>
        <div style={{height:"90vh", backgroundColor:color}}>fghj</div>

        <button onClick={()=>setColor("blue")}>blue</button>
        <button onClick={()=>setColor("green")}>green</button>
        <button onClick={()=>setColor("yellow")}>yellow</button>
        <button onClick={()=>setColor("black")}>black</button>
        <button onClick={()=>setColor("orange")}>orange</button>

        <h1 style={{display:bg}}>mobile mat chalao </h1>
        <button onClick={()=>setBg("none")}>hide</button>
        <button onClick={()=>setBg("block")}>display</button>


        {Tg ? <h1>mobile mat chalao </h1>:""}
        <button onClick={()=>setTg(false)}>Hide</button>


        </>
    )
}
export default Bg;