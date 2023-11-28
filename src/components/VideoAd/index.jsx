import { Container, Row } from 'react-bootstrap'

function VideoAd() {
  return (
    <section className="videoad">
      <Container>
        <Row className="py-5">
          <div className="container text-center mx-auto">
            <iframe width="1280" height="720" src="https://www.youtube.com/embed/zyD94g1A2q8?autoplay=1" frameBorder="0"></iframe>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default VideoAd
