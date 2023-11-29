import { useState } from 'react'
import { Col, Collapse, Container, Image, ListGroup, Row } from 'react-bootstrap'
import faqImg from '../../assets/images/faq-assets/faq.jpg'
import HelpFaqItem from '../HelpFaqItem'
import faqItems from './data'

function HelpFaq() {
  const [active, setActive] = useState(0)

  return (
    <section className="faq my-5 py-5">
      <Container>
        <Row>
          <Col lg={3}>
            <h1 className="fs-5 mb-2 list-group list-group-item fw-bolder text-primary" onClick={() => setActive(0)}>
              Frequently Asked Questions
            </h1>
            <ListGroup as="ul">
              {faqItems.map((faq) => (
                <HelpFaqItem key={`faq-${faq.id}`} faqObj={faq} isActive={active === faq.id} onClickItem={() => setActive(faq.id)} />
              ))}
            </ListGroup>
          </Col>
          <Col lg={9}>
            {faqItems.map((faq) => (
              <Collapse in={active === faq.id} key={`faqContent-${faq.id}`}>
                <div>
                  <h2>{faq.q}</h2>
                  <p>{faq.a}</p>
                </div>
              </Collapse>
            ))}
            {active ? (
              ''
            ) : (
              <>
                <div className="init text-center">
                  <h1 className="welcome fw-bolder text-primary">Parkspot FAQs</h1>
                  <p className="fw-bolder fs-5">Your Parking Questions, Our Solutions.</p>
                  <Image src={faqImg} />
                </div>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HelpFaq
