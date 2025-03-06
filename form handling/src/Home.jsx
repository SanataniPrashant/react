import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
    <div>
    <Link to='/form'>Signup</Link>|
    <Link to='/login'>Login</Link>|
    </div>

    <div>
        <Outlet/>
    </div>
    </>
  )
}

export default Home
