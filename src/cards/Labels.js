import React from 'react'
import styled from 'styled-components'

export const AllLabels = styled.div`
color: #E4E9F2;
font-family: Tahoma, sans-serif;
font-size: 14px;
letter-spacing: 0.64px;
grid-row: 2 / 3;
grid-column: 1 / 2;
display: flex;
flex-direction: column;
justify-content: center;
`

const SingleLabel = styled.label`
padding: 3px 0;
`

export default function Labels() {
    return(
        <AllLabels>
            <SingleLabel>Arbeitsklima</SingleLabel>
            <SingleLabel>WLAN</SingleLabel>
            <SingleLabel>Kaffee</SingleLabel>
        </AllLabels> 
    )
}