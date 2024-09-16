import styles from './styles.module.css'

import { Col, Container, Image, Row } from 'react-bootstrap'

import partner1 from '../../assets/images/partner-1.jpg'
import partner2 from '../../assets/images/partner-2.jpg'
import partner3 from '../../assets/images/partner-3.jpg'
import partner4 from '../../assets/images/partner-4.jpg'

function HomePartnersSection() {
  return (
    <section className="partner py-5">
      <Container>
        <div className="sectionHeader text-center">
          <h2 className={`${styles.heading} text-uppercase`}>our partners</h2>
        </div>
        <Row className="py-5 justify-content-center align-items-center">
          <Col lg={3} className="d-flex justify-content-center">
            <Image className="img-fluid" src={partner1} />
          </Col>
          <Col lg={3} className="d-flex justify-content-center">
            <Image className="img-fluid" src={partner2} />
          </Col>
          <Col lg={3} className="d-flex justify-content-center">
            <Image className="img-fluid" src={partner3} />
          </Col>
          <Col lg={3} className="d-flex justify-content-center">
            <Image className="img-fluid" src={partner4} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HomePartnersSection
