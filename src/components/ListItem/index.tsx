import { Badge, Button, Card, Col, ListGroup } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { ListingItemTypes } from '../../types'

type ListItemProps = ListingItemTypes

function ListItem({
  id,
  title,
  img,
  location,
  parkType,
  carType,
  distance,
  ratings,
}: ListItemProps) {
  return (
    <Col lg={4} className="my-3">
      <Card>
        <Card.Img variant="top" src={img} style={{ objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title className="text-capitalize">{title}</Card.Title>
          <Card.Subtitle>
            <Badge bg="success" className="mb-3">
              Location: {location.toUpperCase()}
            </Badge>
          </Card.Subtitle>

          <Card.Text className="text-capitalize">
            Type of Parking: {parkType}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            Available for: {carType.map(String).join(', ')}
          </ListGroup.Item>
          <ListGroup.Item>Distance: {distance} mile</ListGroup.Item>
          <ListGroup.Item>Ratings: {ratings}</ListGroup.Item>
        </ListGroup>
      </Card>

      <div className="d-grid gap-2 mt-3">
        {/* <Button variant="primary">More Details</Button> */}
        {/* <Button
          href="URL"
          target="_blank"
          onClick={() => onClickOpenVacancy(id)}
        >
          More Details
        </Button> */}
        <LinkContainer to={`/listing/${id}`}>
          <Button variant="primary">More Details</Button>
        </LinkContainer>
      </div>
    </Col>
  )
}

export default ListItem
