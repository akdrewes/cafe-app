import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../app/Footer'
import CafeCardList from './CafeCardList'
import CreateCross from '../images/CreateCross.png'

export default function CafeCardsPage({cards, onRatingChanges}) {
    return(
        <>
            <CafeCardList cards={cards} onRatingChanges={onRatingChanges} />
            <Footer path={`/create`} icon={CreateCross} />
        </>
    )
}

CafeCardsPage.propTypes = {
    cards: PropTypes.array.isRequired,
    onRatingChanges: PropTypes.func.isRequired
}