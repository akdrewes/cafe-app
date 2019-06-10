import styled from 'styled-components'

export const CardStyle = styled.section`
    margin-bottom: 30px;
    height: ${props => props.shorterCard ? '540px' : '690px'};
    position: relative;
`

export const Image = styled.img`
    padding: 0 25px;
    height: 250px;
    width: 100%;
    object-fit: cover;
    position: absolute;
    z-index: 2;
`

export const CardBackgroundColor = styled.div`
    height: ${props => props.shorterBackground ? '490px' : '640px'};
    width: 100%;
    background: #77A6A1;
    box-shadow: 2px 3px 3px #53736A;
    position: absolute;
    top: 50px;
`

export const CafeInfo = styled.div`
    padding: 0 25px;
    width: 100%;
    text-align: center;
    color: #E4E9F2;
    position: absolute;
    top: 250px;
`

export const CafeTitle = styled.h2`
    font-family: Monaco;
    font-size: 16px;
    letter-spacing: 1.74px;
    font-weight: 400;
`

export const CafeAddress = styled.p``

export const RatingSection  = styled.section`
    padding: 0 25px;
    height: 100px;
    position: absolute;
    top: 370px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 20% 80%;
    grid-row-gap: 5px;
`

export const RatingButton = styled.button`
    justify-self: end;
    font-size: 12px;
    font-style: italic;
    color: ${props => props.colour ? '#53736A' : '#E4E9F2'};
`

export const RatingView = styled.div`
    display: grid;
`

export const RatingCategory = styled.div`
    display: grid;
    grid-template-columns: 45% 55%;
`

export const Label = styled.label`
    grid-column: 1 / 2;
    color: #E4E9F2;
    display: flex;
    align-items: center;
`

export const Rating = styled.div`
    grid-column: 2 / 3;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

export const WorkIconStyle = styled.img`
    height: 100%;
    width: 90%;
    align-self: center;
`

export const WlanIconStyle = styled.img`
    width: 90%;
    align-self: center;
`

export const CupIconStyle = styled.img`
    height: 70%;
    width: 90%;
    align-self: center;
`

export const CafeOpeningHours = styled.div`
    padding: 0 25px;
    color: #E4E9F2;
    position: absolute;
    top: 500px;
`

export const Arrow = styled.img`
    margin-left: 20px;
    width: 8%;
`

export const Table = styled.table`
    margin-top: 5px;
    display: ${props => props.hidden ? 'none !important' : ''};
`

export const Day = styled.td`
    padding-right: 16px;
`