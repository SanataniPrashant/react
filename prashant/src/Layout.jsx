import  {Outlet} from 'react-router-dom'
import TopNav from './components/Navbar'
const Layout =()=>{
    return (
        <>

        <TopNav/>

        <section>
        <Outlet/>
        </section>
        
        
        </>
    )
}
export default Layout;