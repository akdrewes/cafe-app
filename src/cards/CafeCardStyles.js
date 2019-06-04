import styled from 'styled-components'

export const CardGrid = styled.section`
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: 25px auto 25px;
    height: ${props => props.shorterCard ? '520px' : '670px'};
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
    height: ${props => props.shorterBackground ? '470px' : '620px'};
    width: 100%;
    position: absolute;
    top: 50px;
    background: #77A6A1;
    box-shadow: 2px 3px 3px #53736A;
`

export const CafeInfo = styled.div`
    grid-column: 2 / 3;
    position: absolute;
    text-align: center;
    width: 100%;
    top: 250px;
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

export const CafeRatingStyle  = styled.section`
    padding-left: 25px;
    padding-right: 25px;
    position: absolute;
    top: 370px;
    height: 100px;
    display: grid;
    grid-template-rows: 20% 80%;
    grid-row-gap: 5px;
    grid-template-columns: 1fr;
    /*background: rgba(83,115,106,0.4);
    outline: rgba(83,115,106,0.4) solid 6px;*/
`

export const RatingButton = styled.button`
    grid-row: 1 / 2;
    display: flex;
    justify-content: flex-end;
    padding: 0;
    color: ${props => props.colour ? '#53736A' : '#E4E9F2'};
    font-family: Tahoma, sans-serif;
    font-size: 12px;
    letter-spacing: 0.64px;
`

export const AllRatings = styled.div`
    display: grid;
    grid-row: 2 / 3;
    grid-column: 1 / 3;
`

export const RatingCategory = styled.div`
    display: grid;
    grid-template-columns: 45% 55%;
`

export const Label = styled.label`
    grid-column: 1 / 2;
    display: flex;
    align-items: center;
    color: #E4E9F2;
    font-family: Tahoma, sans-serif;
    font-size: 14px;
    letter-spacing: 0.64px;
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
    height: 70%;
    width: 90%;
    align-self: center;
`

export const CupIconStyle = styled.img`
    height: 70%;
    width: 90%;
    align-self: center;
`

export const CafeOpeningHours = styled.div`
    padding-top: 30px;
    grid-column: 2 / 3;
    position: absolute;
    top: 460px;
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
    display: ${props => props.hidden ? 'none !important' : ''};
`

export const Day = styled.td`
    padding-right: 8px;
`