import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap'

function HelpFaqItem({ faqObj, isActive, onClickItem }) {
  return (
    <>
      <ListGroup.Item as="li" active={isActive} style={{ cursor: 'pointer' }} onClick={onClickItem}>
        {faqObj.q}
      </ListGroup.Item>
    </>
  )
}

HelpFaqItem.propTypes = {
  faqObj: PropTypes.object,
  isActive: PropTypes.bool,
  onClickItem: PropTypes.func,
}

export default HelpFaqItem
