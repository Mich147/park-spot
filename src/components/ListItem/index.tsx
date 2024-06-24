import { Button, Card, Col, ListGroup } from 'react-bootstrap'

import PropTypes from 'prop-types'

function ListItem({ img, location, parkType, carType, distance, ratings }) {
  return (
    <Col lg={4} className="my-3">
      <Card>
        <Card.Img variant="top" src={img} style={{ objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title className="text-capitalize">
            Location: {location}
          </Card.Title>
          <Card.Text className="text-capitalize">
            Type of Parking: {parkType}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            Available for:{' '}
            {Array.isArray(carType)
              ? carType.map((car) => car).join(', ')
              : carType}
          </ListGroup.Item>
          <ListGroup.Item>Distance: {distance} mile</ListGroup.Item>
          <ListGroup.Item>Ratings: {ratings}</ListGroup.Item>
        </ListGroup>
      </Card>

      <div className="d-grid gap-2 mt-3">
        <Button variant="primary">More Details</Button>
        {/* <Button href="URL" target="_blank" onClick={() => onClickOpenVacancy(id)}>
          More Details
        </Button> */}
      </div>
    </Col>
  )
}

ListItem.propTypes = {
  img: PropTypes.string,
  location: PropTypes.string,
  parkType: PropTypes.string,
  carType: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  distance: PropTypes.number,
  ratings: PropTypes.number,
}

export default ListItem
