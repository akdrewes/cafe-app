import React from 'react'
import {getLocal} from "../services";
import {FormStyle, FormLabel, AddCardButton} from './FormStyles'
import Input from './Input'
import SetRating from './SetRating'


export default function Form ({onFormSubmit, ...props}) {

    function handleSubmit(event) {
        const img = `images/christin-hume-505823-unsplash.jpg`
        const alt = `Café Image`
        const form = event.target
        const title = form.title.value
        const street = form.street.value
        const district = form.district.value
        const rating = getLocal('firstRating')
        const score = {workAtmosphere: rating[0], wlan: rating[1], coffee: rating[2]}
        const counter = 1
        const openingHours = [{day: `Mon`, time: `8:00 - 18:00`}]

        onFormSubmit({img, alt, title, street, district, score, counter, openingHours})

        props.history.push('/')
    }

    return(
        <FormStyle onSubmit={handleSubmit}>
            <Input text={`Name of the café`} name={`title`} placeholder={`Café name`} />
            <Input text={`Street & No.`} name={`street`} placeholder={`Musterstraße 45`} />
            <Input text={`Postal code & City`} name={`district`} placeholder={`20457 Hamburg`} />
            <FormLabel>Your first rating
                <SetRating />
            </FormLabel>
            <AddCardButton>Add café</AddCardButton>
        </FormStyle>
    )
}