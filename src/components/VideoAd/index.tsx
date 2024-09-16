import { Container, Row } from 'react-bootstrap'

import styles from './style.module.css'

function VideoAd() {
  return (
    <section className="videoad">
      <Container>
        <Row className="py-5">
          <div className="container text-center mx-auto img-fluid">
            <iframe
              className={styles.vidad}
              src="https://www.youtube.com/embed/zyD94g1A2q8?autoplay=1"
              frameBorder="0"
            ></iframe>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default VideoAd
