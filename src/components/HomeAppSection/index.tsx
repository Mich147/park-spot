import { FaStar } from 'react-icons/fa6'
import apple from '../../assets/images/apple.png'
import google from '../../assets/images/google.png'
import phone from '../../assets/images/phone.png'
import styles from './styles.module.css'

import { Col, Container, Image, Row } from 'react-bootstrap'

function HomeAppSection() {
  return (
    <section className="appDownload py-5 bg-dark">
      <Container>
        <Row className="align-items-center gx-5">
          <Col lg={4}>
            <Image src={phone} className="img-fluid" />
          </Col>
          <Col lg={8} className="mt-sm-5 mt-lg-0 d-flex justify-content-center">
            <div className="appdownloadContent">
              <h2 className={styles.heading}>download the app now!</h2>
              <p className={styles.subHeading}>The most intuitive and reliable parking app.</p>
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar key={`star-${i}`} color="#ffac33" size={20} />
              ))}
              <div className="d-flex gap-3 mt-4">
                <Image src={apple} width={150} />
                <Image src={google} width={150} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HomeAppSection
