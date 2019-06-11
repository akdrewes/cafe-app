import React from 'react'
import {Header} from '../app/HeaderStyles'
import Footer from '../app/Footer'
import Form from './Form'
import BackArrow from '../images/BackArrow.png'

export default function CreatePage({createCard,history}) {
    return(
        <>
           <Header>Café Suggestion</Header>
            <Form onFormSubmit={createCard} history={history} />
            <Footer path={`/`} icon={BackArrow} />
        </>
    )
}