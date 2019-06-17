import React from 'react'
import PropTypes from 'prop-types'
import {FormLabel, FormInput} from './FormStyles'

export default function LabelInput({text, name, placeholder}) {
    return(
        <FormLabel>{text}
            <FormInput type="text" name={name} placeholder={placeholder}></FormInput>
        </FormLabel>
    )
}

LabelInput.propTypes = {
    text: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string
  }