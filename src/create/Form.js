import React, {useState} from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import {getLocal} from "../services";
import {FormStyle, ImageDiv, FormLabel, FileInput, UploadedImage, AddCardButton} from './FormStyles'
import LabelInput from './LabelInput'
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
        const openingHours = [{day: `Mon`, time: `needs to be defined`}, {day: `Tue`, time: `needs to be defined`}, {day: `Wed`, time: `needs to be defined`}, {day: `Thu`, time: `needs to be defined`}, {day: `Fri`, time: `needs to be defined`}, {day: `Sat`, time: `needs to be defined`}, {day: `Sun`, time: `needs to be defined`}]
        const img = image
        const alt = `Café Image of ${title}`

        onFormSubmit({img, alt, title, street, district, score, counter, openingHours})

        history.push('/')
       
    }

    return(
        <FormStyle onSubmit={handleSubmit}>
            <LabelInput text={`Name of the café`} name={`title`} placeholder={`Café name`} />
            <LabelInput text={`Street & No.`} name={`street`} placeholder={`Musterstraße 45`} />
            <LabelInput text={`Postal code & City`} name={`district`} placeholder={`20457 Hamburg`} />
            <FormLabel>Your first rating
                <SetRating />
            </FormLabel>
            <FormLabel>Image of the café
              <FileInput type="file" name="file" onChange={upload} />
              <ImageDiv>
                {image ? <UploadedImage src={image} alt="uploaded image" /> : ''}
              </ImageDiv>
            </FormLabel>
            <AddCardButton position={image}>Add café</AddCardButton>
        </FormStyle>
    )
}

Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}