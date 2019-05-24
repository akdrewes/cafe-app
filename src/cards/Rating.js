import React from 'react'
import styled from 'styled-components'

const Labels = styled.div`
color: #E4E9F2;
font-family: Tahoma, sans-serif;
font-size: 14px;
letter-spacing: 0.64px;
display: flex;
flex-direction: column;
justify-content: center;
`

const SingleLabel = styled.label`
padding: 3px 0;
`

export default function Rating() {
    return(
        <Labels>
            <SingleLabel>Arbeitsatmosphäre</SingleLabel>
            <SingleLabel>WLAN</SingleLabel>
            <SingleLabel>Kaffee</SingleLabel>
        </Labels> 
    )
}