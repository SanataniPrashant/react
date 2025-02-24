import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const TopNav = ()=>(
  <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{padding:'20px', gap:"50px"}} className="me-auto">
            <Link style={{textDecoration:'none' , color:'black'}} to='/home'>Home</Link>
            <Link style={{textDecoration:'none',color:'black'}} to='/about'>About</Link>
            <Link style={{textDecoration:'none',color:'black'}} to='/contact'>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
)
export default TopNav