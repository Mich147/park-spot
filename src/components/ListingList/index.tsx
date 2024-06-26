import { Container, Row, Stack } from 'react-bootstrap'
import ListItem from '../ListItem'
import ListingSearchForm from '../ListingSearchForm'
import listingItems from './data'

function ListingList() {
  return (
    <section className="listing py-5">
      <Container>
        <Stack style={{ marginTop: '1rem', marginBottom: '3rem' }}>
          <ListingSearchForm />
        </Stack>
      </Container>
      <hr />
      <Container>
        <Row>Filter options</Row>
        <Row>
          {listingItems.map((item) => (
            <ListItem
              key={`list-${item.id}`}
              {...item}
              carType={
                Array.isArray(item.carType) ? item.carType : [item.carType]
              }
            />
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ListingList
