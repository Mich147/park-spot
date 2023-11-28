import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

function Footer() {
  return (
    <footer className={`py-5 bg-dark text-light ${styles.link}`}>
      <Container>
        <Row>
          <Col>
            <h5 className="font-weight-bold">QUESTIONS</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">WHO ARE WE?</Link>
              </li>
              <li>
                <Link to="/">HOW IT WORKS?</Link>
              </li>
              <li>
                <Link to="/">FAQS</Link>
              </li>
            </ul>
          </Col>
          <Col>
            <h5 className="font-weight-bold">COLLABORATE WITH US</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">BE A PARTNER</Link>
              </li>
              <li>
                <Link to="/">COLLABORATE WITH US</Link>
              </li>
            </ul>
          </Col>
          <Col>
            <h5 className="font-weight-bold">CONTACT</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">OUR OFFICE</Link>
              </li>
              <li>
                <Link to="/">HELP DESK</Link>
              </li>
            </ul>
          </Col>
          <Col>
            <h5 className="font-weight-bold">DOCUMENTATIONS</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">TERMS AND CONDITIONS OF SERVICE</Link>
              </li>
              <li>
                <Link to="/">PRIVACY POLICY</Link>
              </li>
              <li>
                <Link to="/">CANCELLATION CONDITIONS</Link>
              </li>
              <li>
                <Link to="/">COOKIE POLICY</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
