import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import styles from './styles.module.css'

function ListingSearchForm() {
  return (
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
  )
}

export default ListingSearchForm
