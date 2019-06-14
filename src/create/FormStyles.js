import styled from 'styled-components'

export const FormStyle = styled.form`
    margin-top: 40px;
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

export const ImageDiv = styled.div`
    margin: 10px 0 20px;
`

export const FileInput = styled.input`
    padding: 10px;
    font-size: 12px;
`

export const AllRatings = styled.div`
    margin: 10px 0;
    height: 90px;
    display: grid;
`

export const UploadedImage = styled.img`
    height: 50px;
`

export const AddCardButton = styled.button`
    padding: 5px 0;
    width: 40%;
    background: #77A6A1;
    border: 2px solid white;
    border-radius: 30px;
    font-family: Monaco;
    font-size: 18px;
    letter-spacing: 1.74px;
    font-weight: 400;
    color: #F2F5F5;
    position: absolute;
    bottom: ${props => props.position ? '32px' : '84px'};
`