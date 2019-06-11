import styled from 'styled-components'

export const FormStyle = styled.form`
    margin-top: 50px;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

export const FormLabel = styled.label`
    margin: 2px 0;
    padding: 8px;
    width: 100%;
    border: 1px solid #77A6A1;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 #DCE0DF;
    font-size: 12px;
    display: flex;
    flex-direction: column;
`

export const FormInput = styled.input`
    padding: 8px 0 2px;
    font-size: 16px;

    &::placeholder {
        font-style: italic;
        color: #AAB9B5;
    }
`

export const AllRatings = styled.div`
    margin: 15px 0 25px;
    height: 90px;
    display: grid;
`

export const RatingLabel = styled.label`
    height: 28px;
    font-size: 12px;
    display: flex;
    align-items: center;
`

export const AddCardButton = styled.button`
    padding: 5px 0;
    width: 40%;
    background: #77A6A1;
    border: none;
    border-radius: 30px;
    box-shadow: 2px 3px 3px #53736A;
    font-family: Monaco;
    font-size: 18px;
    letter-spacing: 1.74px;
    font-weight: 400;
    color: #E4E9F2;
    position: absolute;
    bottom: 145px;
`