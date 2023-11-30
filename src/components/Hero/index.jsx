import { Button, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import styles from './styles.module.css'

import { useState } from 'react'
import HomeFilterIcons from '../HomeFilterIcons'
import filterIcons from './data'

function Hero() {
  const [select, setSelect] = useState(0)

  return (
    <header className={`${styles.header} py-5`}>
      <Container>
        <Row className="mb-5">
          <h1>
            Easy parking at the <p>tip of your fingers.</p> <p className={styles.subHeading}>Book your car park now!</p>
          </h1>
        </Row>
        <Row className={`${styles.options} `}>
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

        <Row className={`${styles.heroForm} bg-light my-4`}>
          <Form className={`${styles.listingForm} d-lg-flex  gap-lg-2 justify-content-between`}>
            <Form.Group>
              <FloatingLabel label="Enter Address, Place, City">
                <Form.Control type="text" placeholder="Enter Address, Place, City" />
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <FloatingLabel label="Booking Start">
                <Form.Control type="date" />
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <FloatingLabel label="Booking End">
                <Form.Control type="date" />
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <FloatingLabel label="Choose Vehicle">
                <Form.Select aria-label="Floating label select example">
                  <option value="1">SUV</option>
                  <option value="2">Sedan</option>
                  <option value="3">Motorcycle</option>
                  <option value="4">Light Truck</option>
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
            <Button type="submit">
              Search <FaSearch />
            </Button>
          </Form>
        </Row>
      </Container>
    </header>
  )
}

export default Hero
