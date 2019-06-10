import React from 'react'
import {HomepageHeader} from '../app/HeaderStyles'
import Footer from '../app/Footer'
import CafeCardList from './CafeCardList'
import CreateCross from '../images/CreateCross.png'

export default function CafeCardsPage({cards, onRatingChanges}) {
    return(
        <>
            <HomepageHeader>COFFEE WORKERS</HomepageHeader>
            <CafeCardList cards={cards} onRatingChanges={onRatingChanges} />
            <Footer path={`/create`} icon={CreateCross} />
        </>
    )
}