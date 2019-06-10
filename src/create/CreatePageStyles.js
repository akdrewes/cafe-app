import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const CreatePageHeader = styled.h2`
    background: #77A6A1;
    box-shadow: 2px 3px 3px #53736A;
    padding: 3px 30px;
    align-self: end;
    margin: 16.6px 30px 3px 0;
    font-size: 20px;
    font-family: Monaco;
    font-weight: 400;
    letter-spacing: 1.74px;
    color: #E4E9F2;
`

export const FormStyle = styled.form`
    margin-top: 50px;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

export const CreateLabel = styled.label`
    border: 1px solid #77A6A1;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 #DCE0DF;
    width: 100%;
    margin: 2px 0;
    padding: 8px;
    display: flex;
    flex-direction: column;
    font-family: Tahoma;
    font-size: 12px;
    letter-spacing: 0.64px;
    color: #53736A;
`

export const CreateInput = styled.input`
    padding: 8px 0 2px;
    font-size: 16px;

    &::placeholder {
        color: #AAB9B5;
        font-style: italic;
    }
`

export const AllRatings = styled.div`
    display: grid;
    margin: 15px 0 25px;
    height: 90px;
`

export const RatingLabel = styled.label`
    font-family: Tahoma;
    font-size: 12px;
    letter-spacing: 0.64px;
    color: #53736A;
    display: flex;
    align-items: center;
`

export const CreateButton = styled.button`
    background: #77A6A1;
    box-shadow: 2px 3px 3px #53736A;
    border-radius: 30px;
    border: none;
    padding: 5px 0;
    width: 40%;
    font-size: 18px;
    font-family: Monaco;
    font-weight: 400;
    letter-spacing: 1.74px;
    color: #E4E9F2;
    position: absolute;
    bottom: 145px;
`

export const GoBack = styled(NavLink)`
    height: 50px;
    width: 50px;
    background: #77A6A1;
    border: 2px solid white;
    border-radius: 50%;
    position: absolute;
    left: 165px;
    top: -25px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 101;
`

export const BackArrowStyle = styled.img`
    width: 80%;
`