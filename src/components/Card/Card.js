import React from 'react'
import PropTypes from 'prop-types'
import {CardWrapper} from './Card.styles'

const Card = ({value}) => (
    <CardWrapper>
        {value}
    </CardWrapper>
)

Card.propTypes = {
    value: PropTypes.number.isRequired
}

Card.defaultProps = {
    value: 11
}

export default Card