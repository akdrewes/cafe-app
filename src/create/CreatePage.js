import React from 'react'
import {CardsPageStyle, CardsPageFooter} from '../cards/CafeCardStyles'
import {CreatePageHeader, GoBack, BackArrowStyle} from './CreatePageStyles'
import Form from './Form'
import BackArrow from '../images/BackArrow.png'

export default function CreatePage({createCard, ...props}) {
    return(
        <CardsPageStyle>
            <CreatePageHeader>Café Vorschlag</CreatePageHeader>
            <Form onFormSubmit={createCard} {...props} />
            <CardsPageFooter><GoBack to={`/`}><BackArrowStyle src={BackArrow}/></GoBack></CardsPageFooter>
        </CardsPageStyle>
    )
}