import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { BsFacebook } from 'react-icons/bs'
import { FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'

import styles from './styles.module.css'

function ContactUs() {
  return (
    <section className="contactUs">
      <Container>
        <Row className="my-5">
          <Col lg={6}>
            <h2>Contact Us</h2>
            <p className="mt-4">We value your feedback and are here to assist you. Please use the contact form or the provided contact details to reach out to us.</p>
            <address>
              <p>
                <strong>Address:</strong> 123 Park Lane
              </p>
              <p>Cityville, USA</p>
              <p>
                <strong>Phone:</strong> +1-123-456-7890
              </p>
              <p>
                <strong>Email:</strong> <a href="#">info@parkspot.com</a>
              </p>
              <p>
                <strong>Support Email:</strong> <a href="#">support@parkspot.com</a>
              </p>
              <div className="social d-flex gap-2">
                <p>
                  <strong>Follow Us:</strong>
                </p>
                <div className="socialIcons d-flex gap-2">
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <BsFacebook size={23} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <FaTwitter size={25} />
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <FaInstagram size={25} />
                  </a>
                  <a href="https://www.youtube.com/t" target="_blank" rel="noreferrer">
                    <FaYoutube size={25} />
                  </a>
                </div>
              </div>
            </address>
          </Col>
          <Col lg={6}>
            <h2>For Comments and Suggestions</h2>
            <Form className={styles.form}>
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <FloatingLabel controlId="floatingTextarea2" label="Comments and Suggestions">
                  <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
                </FloatingLabel>
              </Form.Group>

              <Button className={styles.subBtn} type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactUs
