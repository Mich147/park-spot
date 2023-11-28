import { Col, Container, Row } from 'react-bootstrap'
import styles from './styles.module.css'
function HomeStatsSection() {
  return (
    <section className={`${styles.stats} bg-dark`}>
      <Container>
        <Row className="align-items-center">
          <Col className="text-center">
            <h3 className={styles.heading}>
              2 million+ <span className={styles.subHeading}>satisfied users</span>
            </h3>
          </Col>
          <Col className="text-center">
            <h3 className={styles.heading}>
              8 <span className={styles.subHeading}> provinces</span>
            </h3>
          </Col>
          <Col className="text-center">
            <h3 className={styles.heading}>
              75 <span className={styles.subHeading}>cities</span>
            </h3>
          </Col>
          <Col className="text-center">
            <h3 className={styles.heading}>
              800+ <span className={styles.subHeading}>car parks</span>
            </h3>
          </Col>
          {/* <Col lg={3}>
              <div className="featureImage">
                <img src={pressence} alt="" />
              </div>
            </Col>
            <Col lg={9}>
              <Row>
                <Col className="text-center">
                  <h3 className={styles.heading}>
                    2 million+ <span className={styles.subHeading}>satisfied users</span>
                  </h3>
                </Col>
                <Col className="text-center">
                  <h3 className={styles.heading}>
                    8 <span className={styles.subHeading}> provinces</span>
                  </h3>
                </Col>
                <Col className="text-center">
                  <h3 className={styles.heading}>
                    75 <span className={styles.subHeading}>cities</span>
                  </h3>
                </Col>
                <Col className="text-center">
                  <h3 className={styles.heading}>
                    800+ <span className={styles.subHeading}>car parks</span>
                  </h3>
                </Col>
              </Row>
            </Col> */}
        </Row>
      </Container>
    </section>
  )
}

export default HomeStatsSection
