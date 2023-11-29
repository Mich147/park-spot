import { Container, Row } from 'react-bootstrap'
import ListItem from '../ListItem'
import listingItems from './data'

function ListingList() {
  return (
    <section className="listing py-5">
      <Container>
        <Row>Filter options</Row>
        <Row>
          {listingItems.map((item) => (
            <ListItem key={`list-${item.id}`} {...item} />
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ListingList
