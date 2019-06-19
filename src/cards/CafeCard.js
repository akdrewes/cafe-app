import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  CardStyle,
  CardBackgroundColor,
  Image,
  CafeInfo,
  CafeTitle,
  CafeAddress,
} from './CafeCardStyles.js'
import CafeRating from './CafeRating'
import WeeklyOpeningHours from './WeeklyOpeningHours'

export default function CafeCard({ card, onRatingChanges }) {
  const [isHidden, setOpeningHours] = useState(true)

  const openingHoursDefined = card.openingHours.length !== 0

  function handleToggleOpeningHours() {
    if (openingHoursDefined) {
      setOpeningHours(!isHidden)
    }
  }

  return (
    <CardStyle shorterCard={isHidden}>
      <CardBackgroundColor shorterBackground={isHidden} />
      <Image src={card.img} alt={card.alt} />
      <CafeInfo>
        <CafeTitle>{card.title}</CafeTitle>
        <CafeAddress>
          {card.street}
          <br />
          {card.district}
        </CafeAddress>
      </CafeInfo>
      <CafeRating
        score={card.score}
        counter={card.counter}
        cardId={card._id}
        onRatingChanges={onRatingChanges}
      />
      <WeeklyOpeningHours
        openingHours={card.openingHours}
        hidden={isHidden}
        onToggleOpeningHours={handleToggleOpeningHours}
      />
    </CardStyle>
  )
}

CafeCard.propTypes = {
    card: PropTypes.shape({
        _id: PropTypes.string,
        img: PropTypes.string,
        alt: PropTypes.string,
        title: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        district: PropTypes.string.isRequired,
        score: PropTypes.objectOf(PropTypes.number).isRequired,
        counter: PropTypes.number.isRequired,
        openingHours: PropTypes.array,
        }),
    onRatingChanges: PropTypes.func,
    isHidden: PropTypes.bool
}
