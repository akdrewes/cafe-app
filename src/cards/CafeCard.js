import React from 'react'
import styled from 'styled-components'

const CardGrid = styled.section`
    grid-column: 2 / 3;
    display: grid;
    grid-template-columns: 25px auto 25px;
    height: 500px;
    position: relative;
`

const Image = styled.img`
    left: 25px;
    height: 250px;
    width: 250px;
    object-fit: cover;
    position: absolute;
    z-index: 2;
`

const CardBackgroundColor = styled.div`
    height: 450px;
    width: 100%;
    background: #77A6A1;
    position: absolute;
    top: 50px;
`

const CafeInfo = styled.div`
    grid-column: 2 / 3;
    position: absolute;
    top: 250px;
    text-align: center;
    color: #E4E9F2;
`

const CafeTitle = styled.h2`
    font-family: Monaco;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 1.74px;
`

const CafeAddress = styled.p`
    font-family: Tahoma;
    font-size: 14px;
    letter-spacing: 0.64px;
`

export default function CafeCard({src, alt, title, street, district}) {
    return (
        <CardGrid>
            <Image src={src} alt={alt} />
            <CardBackgroundColor />
            <CafeInfo>
                <CafeTitle>{title}</CafeTitle>
                <CafeAddress>{street}<br/>{district}</CafeAddress>
            </CafeInfo>
        </CardGrid>
    )
}