import styled from 'styled-components'

export const Header = styled.header`
  background: #f2f5f5;
  border-bottom: 1px solid #53736a;
  position: relative;
`

export const Logo = styled.h1`
    padding: 3px 15px;
    background: #77A6A1;
    border: 2px solid white;
    border-radius: 5px;
    font-family: Monaco;
    font-size: 20px;
    letter-spacing: 1.74px;
    font-weight: 400;
    color: #F2F5F5;
    position: absolute;
    top: 4px;
    z-index: 3;

    @media (min-width: 320px) {
        left: 53.5px;
    }

    @media (min-width: 375px) {
        left: 81px;
    }

    @media (min-width: 414px) {
        left: 100.5px;
    }
`
