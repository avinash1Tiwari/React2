import React from "react"

import {CARD_URL} from '../utils/constants'

const Restaurant_Card = ({resData})=>{

    const {
        name,
        cloudinaryImageId,
        areaName,
        avgRating,
        sla,
        cuisines,
        costForTwo
    } = resData?.info

        return(
            <div className="card">
             <img src={CARD_URL +cloudinaryImageId } alt="" />
            <h3>{name}</h3>
            <div className="quisins">{cuisines.join(", ")}</div><br />
            <div className="rating"> {avgRating}* </div><br />
            <div className="time">{sla.deliveryTime}mins</div>
            <div className="price">{costForTwo}</div>
            </div>

        )
}


export default Restaurant_Card