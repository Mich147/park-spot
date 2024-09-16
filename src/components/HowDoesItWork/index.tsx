import { Col, Container, Image, Row } from 'react-bootstrap'
import howDoesItWork from './data'
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
        {howDoesItWork.map((item, i) => (
          <Row className="py-3 my-2" key={`list-${i}`}>
            <Col lg={9}>
              <h3 className={`${styles.title} fw-bold`}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </Col>
            <Col lg={3} className="d-none d-sm-block d-md-none d-lg-block d-sm-none d-md-block">
              <Image src={item.image} />
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  )
}

export default HowDoesItWork
