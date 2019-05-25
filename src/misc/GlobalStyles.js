import styled, {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }
`

export const FadeOut = styled.img`
z-index: 99;
position:fixed;
bottom: 0%;
`

export const FadeIn = styled.img`
z-index: 99;
position:fixed;
top: 0%;
`