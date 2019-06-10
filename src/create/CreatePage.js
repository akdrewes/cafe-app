import React from 'react'
import {PageStyle, Footer} from '../app/AppGrid'
import {CreatePageHeader, GoBack, BackArrowStyle} from './CreatePageStyles'
import Form from './Form'
import BackArrow from '../images/BackArrow.png'

export default function CreatePage({createCard, ...props}) {
    return(
        <PageStyle>
            <CreatePageHeader>Café Suggestion</CreatePageHeader>
            <Form onFormSubmit={createCard} {...props} />
            <Footer><GoBack to={`/`}><BackArrowStyle src={BackArrow}/></GoBack></Footer>
        </PageStyle>
    )
}