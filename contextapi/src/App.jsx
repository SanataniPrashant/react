import Child1 from './CHild1'
import { createContext } from 'react'
import './App.css'
import Child3 from './Child3';
let cdata = createContext();
function App() {
  //function hai create context jo ek object return karega Provider and Consumer
  let name = "Ram"
  return (
    <>
    <Child3/>
      <cdata.Provider value={name}>
      <Child1/>
      </cdata.Provider>
      <h1>props drilling ko solve karne ke liye context api use ki jaati hai </h1>
      <h2>data should be globally defined and then export the global data</h2>
      <h4>create provider consumer</h4>
      <h5>context api use karke props drilling ko solve karte hai   rafce</h5>
    </>
  )
}

export default App
export {cdata}
