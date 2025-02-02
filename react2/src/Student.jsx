

const Student = (props)=>{
    return (
        <>
        <h1 className="p">Student Name: {props.Stuname}</h1>
        <h1>StudentRollno: {props.rno}</h1>
        <h1>Student Subject: {props.sub}</h1>
        <h1>StudentFees: {props.fees}</h1>
        </>
    )
}

export default Student