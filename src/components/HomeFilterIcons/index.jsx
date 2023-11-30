import PropTypes from 'prop-types'
import { Form, Image, InputGroup } from 'react-bootstrap'

import cx from 'classnames'

import styles from './styles.module.css'

function HomeFilterIcons({ name, icon, isSelect, onItemSelect }) {
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Check type="checkbox" checked={isSelect} className={styles.helloInput} id={name} label={<Image src={icon} className={`${isSelect ? cx(styles.iconBox, styles.activeIconBox) : styles.iconBox} img-fluid`} />} onChange={onItemSelect} />
      </InputGroup>
    </div>
  )
}

HomeFilterIcons.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  icon: PropTypes.string,
  isSelect: PropTypes.bool,
  onItemSelect: PropTypes.func,
}

export default HomeFilterIcons
