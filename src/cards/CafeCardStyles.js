import styled from 'styled-components'

export const CardGrid = styled.section`
margin-bottom: 30px;
grid-column: 2 / 3;
display: grid;
grid-template-columns: 25px auto 25px;
height: ${props => props.shorterCard ? '410px' : '550px'};
position: relative;
`

export const Image = styled.img`
left: 25px;
height: 250px;
width: 250px;
object-fit: cover;
position: absolute;
z-index: 2;
`

export const CardBackgroundColor = styled.div`
height: ${props => props.shorterBackground ? '360px' : '500px'};
width: 100%;
position: absolute;
top: 50px;
background: #77A6A1;
box-shadow: 2px 3px 3px #53736A;
`

export const CafeInfo = styled.div`
grid-column: 2 / 3;
position: absolute;
top: 250px;
text-align: center;
color: #E4E9F2;
`

export const CafeTitle = styled.h2`
font-family: Monaco;
font-weight: 400;
font-size: 16px;
letter-spacing: 1.74px;
`

export const CafeAddress = styled.p`
font-family: Tahoma, sans-serif;
font-size: 14px;
letter-spacing: 0.64px;
`

export const CafeOpeningHours = styled.div`
grid-column: 2 / 3;
position: absolute;
top: 370px;
color: #E4E9F2;
font-family: Tahoma, sans-serif;
font-size: 14px;
letter-spacing: 0.64px;
`

export const Arrow = styled.img`
margin-left: 20px;
width: 8%;
`

export const Table = styled.table`
margin-top: 5px;
display: ${props => props.hidden ? 'none !important' : ''}
`

export const Day = styled.td`
padding-right: 8px;
`