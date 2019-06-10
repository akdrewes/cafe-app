import React from 'react'
import {FormLabel, FormInput} from './FormStyles'

export default function Input({text, name, placeholder}) {
    return(
        <FormLabel>{text}
            <FormInput type="text" name={name} placeholder={placeholder}></FormInput>
        </FormLabel>
    )
}