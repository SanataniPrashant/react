
import { useContext } from "react"
import { pdata} from "./Child3"
const Child5 = ()=>{
    let data = useContext(pdata);
    return(
        <>

        <h2>rammmmmmmmmmm {data.name} and age {data.age}</h2>
        
        <h1>Child 5</h1>
        </>
    )
}
export default Child5