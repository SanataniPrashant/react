import Child4 from "./Child4"
import { createContext } from "react"

let pdata = createContext();
const Child3 = ()=>{
    let obj = {name:"ram",age:"45"}
    return(
        <>

        <pdata.Provider value={obj}>
        <Child4/>
        </pdata.Provider>
        
        
        <h1>Child 3</h1>
        </>
    )
}
export default Child3
export {pdata }
// props is the collection of argument and attribute
//React Props are like function arguments in JavaScript and attributes in HTML.