import React from 'react'
import {CreateLabel, CreateInput} from './CreatePageStyles'

export default function Input({text, name, placeholder}) {
    return(
        <CreateLabel>{text}
            <CreateInput type="text" name={name} placeholder={placeholder}></CreateInput>
        </CreateLabel>
    )
}