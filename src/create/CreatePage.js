import React from 'react'
import Footer from '../app/Footer'
import Form from './Form'
import BackArrow from '../images/BackArrow.png'

export default function CreatePage({createCard,history}) {
    return(
        <>
            <Form onFormSubmit={createCard} history={history} />
            <Footer path={`/`} icon={BackArrow} />
        </>
    )
}