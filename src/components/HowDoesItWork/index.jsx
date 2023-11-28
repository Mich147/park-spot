import { Col, Container, Image, Row } from 'react-bootstrap'
import searchForParking from '../../assets/images/howitworks-assets/search-for-parking.jpg'
import styles from './styles.module.css'

function HowDoesItWork() {
  return (
    <section className="howParkSpot">
      <Container>
        <Row className="py-3">
          <div className="sectionHeader text-center">
            <h1 className={`${styles.heading} fw-bold`}>How does it work?</h1>
          </div>
        </Row>
        <Row className="py-3">
          <Col lg={9}>
            <h3 className={`${styles.title} fw-bold`}>1. Search for Parking</h3>
            <p className={styles.description}>Enter your desired location and time. Our platform will show you a list of available parking spaces nearby. You can view detailed descriptions, photos, and reviews.</p>
          </Col>
          <Col lg={3} className="d-none d-sm-block d-md-none d-lg-block d-sm-none d-md-block">
            <Image src={searchForParking} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HowDoesItWork
