import React from 'react'

export default function Input({text, name, placeholder}) {
    return(
        <label>{text}
            <input type="text" name={name} placeholder={placeholder}></input>
        </label>
    )
}