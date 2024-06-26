import {
  Button,
  Container,
  Image,
  Nav,
  NavDropdown,
  Navbar,
  Spinner,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import logo from '../../assets/logo.png'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Login from '../../features/auth/Login'
import { logout } from '../../features/auth/Login/auth.slice'
import { AppDispatch, RootState } from '../../store'
import styles from './styles.module.css'

function Navigation() {
  const [modalShow, setModalShow] = useState<boolean>(false)

  const dispatch = useDispatch<AppDispatch>()

  const { status, isUserLoggedIn, user } = useSelector(
    (state: RootState) => state.auth
  )

  const isLoading = status === 'isLoading'

  function handleClick() {
    dispatch(logout())
  }

  return (
    <Navbar
      expand="lg"
      className={`${styles.boxShadow} bg-body-tertiary`}
      fixed="top"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <Image src={logo} alt="logo" width={150} />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to="/">
              <Nav.Link className="text-uppercase fw-bold">home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/how-it-works">
              <Nav.Link className="text-uppercase fw-bold">
                how it works
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/listing">
              <Nav.Link className="text-uppercase fw-bold">listing</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="text-uppercase fw-bold">contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/help">
              <Nav.Link className="text-uppercase fw-bold">help</Nav.Link>
            </LinkContainer>
          </Nav>

          {isLoading ? (
            <Spinner animation="border" role="status" size="sm">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <>
              {isUserLoggedIn || user ? (
                <div className="d-flex gap-4">
                  <Nav>
                    <LinkContainer to="/dashboard">
                      <Nav.Link className="text-uppercase fw-bold">
                        Dashboard
                      </Nav.Link>
                    </LinkContainer>
                  </Nav>

                  <Button
                    variant="outline-primary"
                    className={styles.logBtn}
                    onClick={handleClick}
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="d-flex gap-4">
                  <Button
                    variant="outline-primary"
                    className={styles.logBtn}
                    onClick={() => setModalShow(true)}
                  >
                    Login
                  </Button>
                  <NavDropdown
                    title="Sign Up"
                    id="basic-nav-dropdown"
                    className={`${styles.logBtn} btn btn-outline-primary`}
                  >
                    <LinkContainer to="/signup">
                      <NavDropdown.Item className="text-capitalize">
                        as user
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/parkner-signup">
                      <NavDropdown.Item className="text-capitalize">
                        as parkner
                      </NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                </div>
              )}
            </>
          )}
        </Navbar.Collapse>
      </Container>

      <Login modalShow={modalShow} onHide={setModalShow} />
    </Navbar>
  )
}

export default Navigation
