import React from 'react'
import {RatingCategory, Label, Rating, WorkIconStyle, WlanIconStyle, CupIconStyle} from './CafeCardStyles.js'
import WorkIcon from '../images/WorkAtmosphereY.png'
import WlanIcon from '../images/WLANY.png'
import CupIcon from '../images/CupY.png'

export default function StaticRating({counter, score}) {

    const rating = [Math.round(score[0]/counter), Math.round(score[1]/counter), Math.round(score[2]/counter)]
    
    return (
        <>
            <RatingCategory>
                <Label>Arbeitsklima</Label>
                <Rating>{new Array(rating[0]).fill('').map(() => <WorkIconStyle src={WorkIcon} /> )}</Rating>
            </RatingCategory>

            <RatingCategory>
                <Label>WLAN</Label>
                <Rating>{new Array(rating[1]).fill('').map(() => <WlanIconStyle src={WlanIcon} /> )}</Rating>
            </RatingCategory>
            
            <RatingCategory>
                <Label>Kaffee</Label>
                <Rating>{new Array(rating[2]).fill('').map(() => <CupIconStyle src={CupIcon} /> )}</Rating>
            </RatingCategory> 
        </>
    )
}