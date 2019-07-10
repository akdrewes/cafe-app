import React from 'react'
import styled from 'styled-components'

const BurgerMenu = styled.div`
    display: block;
    position: absolute;
    top: 25px;
    left: 15px;
    z-index: 3;
`

const MenuToggle = styled.input`
    display: block;
    height: 32px;
    width: 40px;
    position: absolute;
    top: -7px;
    left: -7px;
    opacity: 0;
    z-index: 4;

    &:checked ~ span {
        opacity: 1;
        background: #53736a;
        transform: rotate(45deg) translate(-2px, -1px);
    }

    &:checked ~ span:nth-last-child(3) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
    }

    &:checked ~ span:nth-last-child(2) {
        background: #53736a;
        transform: rotate(-45deg) translate(0, -1px);
    }

    &:checked ~ ul {
        transform: none;
    }
`

const BurgerSpan = styled.span`
    display: block;
    height: 4px;
    width: 33px;
    margin-bottom: 5px;
    position: relative;
    background: #77A6A1;
    border-radius: 3px;
    z-index: 3;
    transform-origin: 4px 0px;
    transition: transform 0.5s ease-in;

    &:first-child {
        transform-origin: 0% 0%;
    }

    &:nth-last-child(2) {
        transform-origin: 0% 100%;
    }
`

const Menu = styled.ul`
    position: absolute;
    width: 170px;
    margin: -100px 0 0 -50px;
    padding: 50px 50px 100vh;
    padding-top: 125px;
    background: darkslategray;
    border-radius: 5px;
    border: 1px solid #53736a;
    list-style-type: none;
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    transition: transform 0.5s ease-in;
`

const City = styled.li`
    padding: 10px 0;
    font-size: 16px;
    font-style: bold;
    color: #F2F5F5;
`

export default function Filter() {

    return(
        <nav>
            <BurgerMenu>
                <MenuToggle type='checkbox' />
                <BurgerSpan></BurgerSpan>
                <BurgerSpan></BurgerSpan>
                <BurgerSpan></BurgerSpan>
                <Menu>
                    <City>Hamburg</City>
                    <City>Düsseldorf</City>
                </Menu>
            </BurgerMenu>
        </nav>
    )
}