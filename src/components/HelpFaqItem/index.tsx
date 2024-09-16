import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap'
import { FAQItemTypes } from '../../types'

type HelpFaqItemProps = {
  faqObj: FAQItemTypes
  isActive: boolean
  onClickItem: () => void
}

function HelpFaqItem({ faqObj, isActive, onClickItem }: HelpFaqItemProps) {
  return (
    <>
      <ListGroup.Item
        as="li"
        active={isActive}
        style={{ cursor: 'pointer' }}
        onClick={onClickItem}
      >
        {faqObj.question}
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
