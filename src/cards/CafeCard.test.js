import React from 'react'
import CafeCard from './CafeCard'
import renderer from 'react-test-renderer'

describe('Card component', () => {
    it('renders a Card with given café image and address', () => {
        const card = {_id="id" img="cafeimage.jpg" alt="café image" title="Café name" street="café street" district="postal code and city"}
        const component = renderer.create(
            <CafeCard card={card} />
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})