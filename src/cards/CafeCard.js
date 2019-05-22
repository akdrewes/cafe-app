import React from 'react'
import styled from 'styled-components'

const CardGrid = styled.section`
    grid-column: 2 / 3;
    height: 500px;
    position: relative;
`

const Image = styled.img`
    position: absolute;
    left: 25px;
    height: 250px;
    width: 250px;
    z-index: 2;
`

const CardInfo = styled.div`
    height: 450px;
    width: 100%;
    background: #77A6A1;
    position: absolute;
    top: 50px;
`

const CafeTitle = styled.h2`
    font-family: Monaco;
    font-size: 16px;
`

const CafeAddress = styled.p`
    font-family: Tahoma;
    font-size: 14px;
`

export default function CafeCard({src, alt, title, address}) {
    return (
        <CardGrid>
            <Image src={src} alt={alt} />
            <CardInfo>
                <CafeTitle>{title}</CafeTitle>
                <CafeAddress>{address}</CafeAddress>
            </CardInfo>
        </CardGrid>
    )
}