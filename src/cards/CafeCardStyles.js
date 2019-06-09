import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const CardsPageStyle = styled.div`
    display: grid;
    grid-template-rows: 52.6px auto;
    height: 100vh;
`

export const CardsPageHeader = styled.h1`
    background: #77A6A1;
    box-shadow: 2px 3px 3px #53736A;
    padding: 3px 30px;
    align-self: end;
    margin: 16.6px 30px 3px 0;
    font-size: 20px;
    font-family: Monaco;
    font-weight: 800;
    letter-spacing: 1.74px;
    color: #E4E9F2;
    position: relative;
`

export const CreateButton = styled(NavLink)`
    height: 50px;
    width: 50px;
    background: #77A6A1;
    box-shadow: 2px 3px 3px #53736A;
    border: none;
    border-radius: 50%;
    position: absolute;
    top: 8.3px;
    right: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 101;
`

export const CreateCrossStyle= styled.img`
    width: 70%;
`

export const CardListStyle = styled.div`
    padding: 20px 30px;
    grid-row: 2;
    overflow-y: scroll;
`

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
    position: absolute;
    top: 50px;
    background: #77A6A1;
    box-shadow: 2px 3px 3px #53736A;
`

export const CafeInfo = styled.div`
    padding: 0 25px;
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
    font-family: Tahoma;
    font-size: 14px;
    letter-spacing: 0.64px;
`

export const CafeRatingStyle  = styled.section`
    padding: 0 25px;
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
    justify-self: end;
    color: ${props => props.colour ? '#53736A' : '#E4E9F2'};
    font-family: Tahoma;
    font-size: 12px;
    font-style: italic;
    letter-spacing: 0.64px;
`

export const AllRatings = styled.div`
    display: grid;
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
    font-family: Tahoma;
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
    position: absolute;
    top: 500px;
    color: #E4E9F2;
    font-family: Tahoma;
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