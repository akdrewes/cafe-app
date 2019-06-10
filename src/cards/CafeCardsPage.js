import React from 'react'
import {PageStyle, Footer} from '../app/AppGrid'
import {CardsPageHeader, CreateButton, CreateCrossStyle, CardListStyle} from './CafeCardStyles.js'
import CafeCardList from './CafeCardList'
import CreateCross from '../images/CreateCross.png'

export default function CafeCardsPage({cards, onRatingChanges}) {
    return(
        <PageStyle>
            <CardsPageHeader>COFFEE WORKERS</CardsPageHeader>
            <CardListStyle>
                <CafeCardList cards={cards} onRatingChanges={onRatingChanges} />
            </CardListStyle>
            <Footer><CreateButton to={`/create`}><CreateCrossStyle src={CreateCross}/></CreateButton></Footer>
        </PageStyle>
    )
}