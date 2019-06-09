import React from 'react'
import { getLocal } from "../services";
import {CreatePageHeader, FormStyle} from './CreatePageStyles'
import SetRating from './SetRating'
import Input from './Input'

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
        const openingHours = [{day: `Mo`, time: `8:00 - 18:00`}]

        onFormSubmit({img, alt, title, street, district, score, counter, openingHours})

        props.history.push('/')
    }

    return(
        <>
            <CreatePageHeader>Café Vorschlag</CreatePageHeader>
            <FormStyle onSubmit={handleSubmit}>
                <Input text={`Name des Cafés`} name={`title`} placeholder={`Café Name`} />
                <Input text={`Straße & Hausnr.`} name={`street`} placeholder={`Musterstraße 45`} />
                <Input text={`PLZ & Stadt`} name={`district`} placeholder={`20457 Hamburg`} />
                <label>Dein erstes Rating
                    <SetRating />
                </label>
                <button>Add café</button>
            </FormStyle>
        </>
    )
}