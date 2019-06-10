import React from 'react'
import {Header} from '../app/HeaderStyles'
import Footer from '../app/Footer'
import Form from './Form'
import BackArrow from '../images/BackArrow.png'

export default function CreatePage({createCard, ...props}) {
    return(
        <>
            <Header>Café Suggestion</Header>
            <Form onFormSubmit={createCard} {...props} />
            <Footer path={`/`} icon={BackArrow} />
        </>
    )
}