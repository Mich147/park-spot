import { Container, Row } from 'react-bootstrap'
import styles from './styles.module.css'

function Hero() {
  return (
    <header className={`${styles.header} py-5`}>
      <Container>
        <Row>
          <h1>
            Easy parking at the <p>tip of your fingers.</p> <p className={styles.subHeading}>Book your car park now!</p>
          </h1>
        </Row>
        <Row className={`${styles.options} pt-5 mt-5 `}>
          <p className="h4">Select the type of car park you are looking for:</p>
        </Row>
      </Container>
    </header>
  )
}

export default Hero
