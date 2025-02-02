const  EmpDesign = (props)=>{
    return(

        <>
        <tr>
            <td>{props.empno}</td>
            <td>{props.empname}</td>
            <td>{props.empDesignation}</td>
            <td>{props.empsalary}</td>
        </tr>
        
        </>
    )
}
export default EmpDesign