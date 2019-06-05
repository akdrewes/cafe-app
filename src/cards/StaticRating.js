import React from 'react'
import {RatingCategory, Label, Rating, WorkIconStyle, WlanIconStyle, CupIconStyle} from './CafeCardStyles.js'
import WorkIcon from '../images/WorkAtmosphereY.png'
import WlanIcon from '../images/WLANY.png'
import CupIcon from '../images/CupY.png'

export default function StaticRating({score, counter}) {

    const {workAtmosphere, wlan, coffee} = score
    const rating = [Math.round(workAtmosphere/counter), Math.round(wlan/counter), Math.round(coffee/counter)]
    
    return (
        <>
            <RatingCategory>
                <Label>Arbeitsklima</Label>
                <Rating>{new Array(rating[0]).fill('').map((placeholder, index) => <WorkIconStyle key={index} src={WorkIcon} /> )}</Rating>
            </RatingCategory>

            <RatingCategory>
                <Label>WLAN</Label>
                <Rating>{new Array(rating[1]).fill('').map((placeholder, index) => <WlanIconStyle key={index} src={WlanIcon} /> )}</Rating>
            </RatingCategory>
            
            <RatingCategory>
                <Label>Kaffee</Label>
                <Rating>{new Array(rating[2]).fill('').map((placeholder, index) => <CupIconStyle key={index} src={CupIcon} /> )}</Rating>
            </RatingCategory> 
        </>
    )
}