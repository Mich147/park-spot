import { Col, Container, Row } from 'react-bootstrap'
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
                <a href="#">WHO ARE WE?</a>
              </li>
              <li>
                <a href="#">HOW IT WORKS?</a>
              </li>
              <li>
                <a href="#">FAQS</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h5 className="font-weight-bold">COLLABORATE WITH US</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">BE A PARTNER</a>
              </li>
              <li>
                <a href="#">COLLABORATE WITH US</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h5 className="font-weight-bold">CONTACT</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">OUR OFFICE</a>
              </li>
              <li>
                <a href="#">HELP DESK</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h5 className="font-weight-bold">DOCUMENTATIONS</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">TERMS AND CONDITIONS OF SERVICE</a>
              </li>
              <li>
                <a href="#">PRIVACY POLICY</a>
              </li>
              <li>
                <a href="#">CANCELLATION CONDITIONS</a>
              </li>
              <li>
                <a href="#">COOKIE POLICY</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
