import { cdata } from "./App"
const Child2 = ()=>{
    return(
        <>

        <cdata.Consumer>
           {(data)=>{
                return(
                    <>
                    <h2>my name is {data}</h2>
                    </>
                )
           }} 
        </cdata.Consumer>
        
        </>
    )
}
export default Child2

// consumer ke drawback () multiple data ko handle karna difficult tha) ko hatane ke liye usecontext hook