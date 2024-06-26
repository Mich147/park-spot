import styles from './styles.module.css'

import { Button, Container, Form, Row } from 'react-bootstrap'

function HomeCTASection() {
  return (
    <section className={`${styles.cta} py-5`}>
      <Container className="d-flex flex-column align-items-center">
        <div className="sectionHeader text-center">
          <h3 className={styles.heading}>subscribe to our newsletter</h3>
          <p className={styles.subHeading}>Get discounts and participate in giveaways.</p>
        </div>
        <Row style={{ width: '62%' }}>
          <Form className="ctaForm d-flex gap-sm-5">
            <Form.Group style={{ width: '100%' }} controlId="exampleForm.ControlInput1">
              <Form.Control className="py-3" type="email" placeholder="e.g. name@example.com" />
            </Form.Group>
            <Button type="submit" size="lg" className="btn-dark">
              Subscribe
            </Button>
          </Form>
        </Row>
        <Row style={{ width: '80%' }} className="text-center mt-5">
          <p>*You will receive news, promotions, and discounts. Don&apos;t worry, we are not spam!</p>
          <p>By subscribing, you accept our Privacy Policy to receive commercial communications from Parclick. Without any obligation, you can unsubscribe whenever you want in the same newsletter.</p>
        </Row>
      </Container>
    </section>
  )
}

export default HomeCTASection
