import { memo } from "react";

const Callback =({task, addtask})=>{
    console.log("******");
    return (
        
        <>
         {
            task.map((key, index)=>{
                return(
                <>
                    <h3 key={index}> {key} </h3>
                </>
                )
            })
           }
        <button onClick={addtask}>add</button>
        
        </>
    )
}

export default memo(Callback)