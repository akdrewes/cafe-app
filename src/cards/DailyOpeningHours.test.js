import React from 'react'
import DailyOpeningHours from './DailyOpeningHours'
import renderer from 'react-test-renderer'

describe('DailyOpeningHours', () => {
    it('renders the weekdays with given opening hours', () => {
        const component = renderer.create(
            <DailyOpeningHours day="Mon" time={{open:'10:00', close: '18:00'}} />
            )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})