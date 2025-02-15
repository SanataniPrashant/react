import Container  from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css'
import { Col, Row, Button} from 'react-bootstrap'

function App() {

  return (
    <>
    <Navbar expand="lg" className="bg-warning">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br />
    <br />

    {/* <Container>
      <h1>container</h1>
    </Container>

    <Container fluid>
      <h1>container fluid</h1>
    </Container> */}

   

    <Container>
      <Row>
        
        <Col lg={6} md={6} sm={12} className='bg-primary text-white p-4 '>
        <h1>Madhya Pradesh Police</h1>
        </Col>

        <Col lg={6} md={6} sm={12} className='bg-danger text-white p-4'>
        <h1> Arrested Rohit Mohite</h1>
        </Col>
      </Row>
      <br />
      <Button variant = "success" >click</Button>
    </Container>

    </>
  )
}

export default App
