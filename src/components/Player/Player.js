import React from 'react'
import PropTypes from 'prop-types'
import {PlayerWrapper, CardsWrapper} from './Player.styles'
import Card from '../Card/Card'

const Player = ({name, cards}) => (
    <PlayerWrapper>
        <h2>{name}</h2>
        <CardsWrapper>
            <Card value={cards[0].value} />
            <Card value={cards[1].value} />
        </CardsWrapper>
    </PlayerWrapper>
)

Player.propTypes = {
    name: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object).isRequired
}

Player.defaultProps = {
    name: 'Test',
    cards: [
        {
            value: 2,
            color: 'hearts'
        },
        {
            value: 13,
            color: 'diamonds'
        }
    ]
}

export default Player