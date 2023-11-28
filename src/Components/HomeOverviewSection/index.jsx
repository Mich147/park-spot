import { Col, Container, Image, Row } from 'react-bootstrap'
import pressence from '../../assets/images/pressence.png'

import styles from './styles.module.css'

function HomeOverviewSection() {
  return (
    <section className="overview py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={8}>
            <Row>
              <Col>
                <p className={`${styles.topText} mb-5`}>When you slide your finger across our app everything changes. because parking is no longer a challenge.</p>
                <p className={styles.bottomText}>You decide where, when to park and which car park suits you best. You save money, you save time. And you realize that parking can be fast, easy, and you always arrive on time.</p>
              </Col>
            </Row>
          </Col>
          <Col lg={4} className="mt-sm-5 mt-lg-0 d-flex justify-content-center">
            <Image src={pressence} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HomeOverviewSection
