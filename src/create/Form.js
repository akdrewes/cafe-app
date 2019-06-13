import React, {useState} from 'react'
import axios from 'axios'
import {getLocal} from "../services";
import {FormStyle, ImageDiv, FormLabel, UserImage, AddCardButton} from './FormStyles'
import Input from './Input'
import SetRating from './SetRating'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

export default function Form ({onFormSubmit, history}) {

    const [image, setImage] = useState('')

    function upload(event) {
      const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`
  
      const formData = new FormData()
      formData.append('file', event.target.files[0])
      formData.append('upload_preset', PRESET)
  
      axios
        .post(url, formData, {
          headers: {
            'Content-type': 'multipart/form-data',
          },
        })
        .then(onImageSave)
        .catch(err => console.error(err))
    }
  
    function onImageSave(res) {
      setImage(res.data.url)
    }

    function handleSubmit(event) {
        const form = event.target
        const title = form.title.value
        const street = form.street.value
        const district = form.district.value
        const rating = getLocal('firstRating')
        const score = {workAtmosphere: rating[0], wlan: rating[1], coffee: rating[2]}
        const counter = 1
        const openingHours = [{day: `Mon`, time: `8:00 - 18:00`}]
        const img = image
        const alt = `Café Image of ${title}`

        onFormSubmit({img, alt, title, street, district, score, counter, openingHours})

        history.push('/')
       
    }

    return(
        <FormStyle onSubmit={handleSubmit}>
            <Input text={`Name of the café`} name={`title`} placeholder={`Café name`} />
            <Input text={`Street & No.`} name={`street`} placeholder={`Musterstraße 45`} />
            <Input text={`Postal code & City`} name={`district`} placeholder={`20457 Hamburg`} />
            <FormLabel>Your first rating
                <SetRating />
            </FormLabel>
            <FormLabel>
                <ImageDiv>{image ? (
                    <UserImage src={image} />
                ) : (
                    <input type="file" name="file" onChange={upload} />
                )}
                </ImageDiv>
            </FormLabel>
            <AddCardButton>Add café</AddCardButton>
        </FormStyle>
    )
}