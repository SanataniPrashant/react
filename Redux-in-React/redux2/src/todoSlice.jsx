import {createSlice} from '@reduxjs/toolkit'

const TodoSlice = createSlice({
    name: 'todo',
    initialState:{ 
        todolist:[]

    },
    reducers: {
        addTodo(state, action) {
            state.todolist.push(action.payload)
            },
        removeTodo(state, action) {
            state.todolist= state.todolist.filter(item => item.id !== action.payload)
        },
        editTodo:(state,actions)=>{
            console.log(actions.payload)
           for(let i in  state.todolist.length)
           {
            console.log(state.todolist[i])
           }
        }
    }
})
export default TodoSlice.reducer
export const {addTodo,removeTodo,editTodo} = TodoSlice.actions