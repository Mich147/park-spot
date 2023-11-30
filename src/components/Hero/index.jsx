import { Container, Row } from 'react-bootstrap'
import styles from './styles.module.css'

import { useState } from 'react'
import HomeFilterIcons from '../HomeFilterIcons'
import filterIcons from './data'

function Hero() {
  const [select, setSelect] = useState(0)

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
          <div className="d-flex gap-5">
            {filterIcons.map((icon) => (
              <HomeFilterIcons
                key={`icon-${icon.id}`}
                {...icon}
                isSelect={select === icon.id}
                onItemSelect={() => {
                  setSelect(icon.id)
                }}
              />
            ))}
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Hero
