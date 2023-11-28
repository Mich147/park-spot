import { Button, Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import logo from '../../assets/logo.png'

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <Image src={logo} alt="logo" width={190} />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <LinkContainer to="/">
              <Nav.Link className="text-capitalize">home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/how-it-works">
              <Nav.Link className="text-capitalize">how it works</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/listings">
              <Nav.Link className="text-capitalize">listings</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="text-capitalize">contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/help">
              <Nav.Link className="text-capitalize">help</Nav.Link>
            </LinkContainer>
          </Nav>
          <div className="d-flex gap-4">
            <Button variant="outline-primary">Login</Button>
            <NavDropdown title="Sign Up" id="basic-nav-dropdown" className="btn btn-outline-primary">
              <NavDropdown.Item href="#action/3.1" className="text-capitalize">
                as user
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="text-capitalize">
                as parkner
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
