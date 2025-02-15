import { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import './App.css'
import { addTodo, removeTodo,editTodo } from './todoSlice';

function App() {


  const dispatch = useDispatch();
  const [val, setVal] = useState('');
  const ans = useSelector((state)=>state.myans.todolist);
  return (
    <>
     
    <h1>Enter your Work</h1>
    <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />

    <button onClick={()=>dispatch(addTodo({id:Date.now(),work:val,states:true}))}>Add</button>

      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Id</th>
            <th>Work</th>
            <th>Delete</th>
            <th>Edit</th>
            <th>Status</th>

            
          </tr>
        </thead>
        <tbody>
          {ans.map((item,index) => (
            <tr>
              <td>{index+1}</td>
              <td>{item.id}</td>
              <td>{item.work}</td>
              <td><button onClick={()=>dispatch(removeTodo(item.id))}>Delete</button></td>
              <td><button onClick={()=>dispatch(editTodo(item.id))}>Edit</button></td>
              {/* <td><button onClick={()=>dispatch(editTodo({states:false}))}>Edit</button></td> */}
            </tr>
            ))}
        </tbody>
      </table>





    </>
  )
}

export default App
