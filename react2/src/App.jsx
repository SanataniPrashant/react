import MSyimg from "../src/images/th.jpg"
import College from  './College.jsx'
import Student from './Student.jsx'

import EmpData from './EmpData.jsx'
import EmpDesign from './EmpDesign.jsx'


const arr = ["ram","mm","ee"]

const ans =arr.map((key)=>{
  return(
    <>
    <h1>{key}</h1>
    </>
  )
})


const StuData = [
  {
    "rollno":121,
    "name":"ram",
    "subject":"math",
    "fees":8520
  },
  {
    "rollno":111,
    "name":"ramchandra",
    "subject":"mathaa",
    "fees":8520
  },
  {
    "rollno":131,
    "name":"ramaa",
    "subject":"maths",
    "fees":8520
  },
  {
    "rollno":141,
    "name":"ramayan",
    "subject":"mathhhh",
    "fees":8520
  }
]

const anss = StuData.map((key)=>{
  return(
    <tr>
      <td>{key.rollno}</td>
      <td>{key.name}</td>
      <td>{key.subject}</td>
      <td>{key.fees}</td>
    </tr>
  )
})

function App() {

  



const name = "sdfghj"
const rollno = 8520
const sub = "vbn"
const fees = 7410


const ana = EmpData.map((key)=><EmpDesign  empno={key.empno} empname={key.name}  empDesignation={key.Designation} empsalary= {key.salary}/>)
  return (
    <>
      <h1 style={{
        color:'red', fontSize:"45px"
      }}>college </h1>

      <div style={{
        border:"3px solid black", borderColor:'red', padding:"10px"
      }}>
        <div style={{
          border:'3px solid blue' 
        }}>
          <h1 style={{ color:'red', textAlign:"center" 
        }}>dfghjdfghjdfghjk</h1>
        </div>
      </div>


      <College clgname="rewa" fs="450000"/>

      <Student Stuname={name}  rno={rollno} sub={sub} fees={fees}/>
       <h1>{ans}</h1>


       <table border="1">
        <thead>
          <th>Rollno</th>
          <th>name</th>
          <th>sub</th>
          <th>Fees</th>
        </thead>
        <tbody>
          {anss}
        </tbody>
       </table>


    
      <table border="1">
        <thead>
          <th>empno</th>
          <th>empname</th>
          <th>empdesi</th>
          <th>empsalary</th>
        </thead>

        <tbody>
        {ana}
        </tbody>
      </table>

        <img src={MSyimg}/>

        <hr />

        <img src="public/image/th.jpg"/>
    </>
  )
}

export default App
