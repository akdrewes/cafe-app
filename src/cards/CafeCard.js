import React from 'react'
import styled from 'styled-components'
import Arrowdown from '../images/arrowDown.png'

const CardGrid = styled.section`
    grid-column: 2 / 3;
    display: grid;
    grid-template-columns: 25px auto 25px;
    height: 550px;
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
    height: 500px;
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
    font-family: Tahoma, sans-serif;
    font-size: 14px;
    letter-spacing: 0.64px;
`

const CafeOpeningHours = styled.div`
    grid-column: 2 / 3;
    position: absolute;
    top: 370px;
    color: #E4E9F2;
    font-family: Tahoma, sans-serif;
    font-size: 14px;
    letter-spacing: 0.64px;
`

const ArrowDown = styled.img`
    margin-left: 20px;
    width: 8%;
`

const Table = styled.table`
    margin-top: 5px;
`

const Day = styled.td`
    padding-right: 8px;
`


export default function CafeCard({src, alt, title, street, district, monTime, tueTime, wedTime, thuTime, friTime, satTime, sunTime}) {
    return (
        <CardGrid>
            <Image src={src} alt={alt} />
            <CardBackgroundColor />
            <CafeInfo>
                <CafeTitle>{title}</CafeTitle>
                <CafeAddress>{street}<br/>{district}</CafeAddress>
            </CafeInfo>
            <CafeOpeningHours>
                <label>Öffnungszeiten</label>
                <ArrowDown src={Arrowdown} />
                <Table>
                    <tbody>
                        <tr>
                            <Day>Mo</Day>
                            <td>{monTime}</td>
                        </tr>
                        <tr>
                            <Day>Di</Day>
                            <td>{tueTime}</td>
                        </tr>
                        <tr>
                            <Day>Mi</Day>
                            <td>{wedTime}</td>
                        </tr>
                        <tr>
                            <Day>Do</Day>
                            <td>{thuTime}</td>
                        </tr>
                        <tr>
                            <Day>Fr</Day>
                            <td>{friTime}</td>
                        </tr>
                        <tr>
                            <Day>Sa</Day>
                            <td>{satTime}</td>
                        </tr>
                        <tr>
                            <Day>So</Day>
                            <td>{sunTime}</td>
                        </tr>
                    </tbody>
                </Table>
            </CafeOpeningHours>
        </CardGrid>
    )
}