import { useEffect,useState } from "react";
import {MENU_API} from '../utils/constants'
import { json, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";


const RestaurantMenu = () =>{
 
    // it is an object => destructure it
    // const resId = useParams();
    // console.log(resId)


    const {resId} = useParams();
    // console.log(resId)

  
    const [menuInfo,setmenuInfo] = useState(null)
   
    useEffect(() =>{
        fetchMenu()
    },[])

    const fetchMenu = async ()=>{

        const data = await fetch(MENU_API + resId )

        const json = await data.json();
        setmenuInfo(json.data)

        // console.log("data from menu => ")
        console.log(json.data)
    }

    if(menuInfo === null) return <Shimmer/>

    const {name,city,locality,costForTwo,costForTwoMessage,avgRating,cuisines} = menuInfo.cards[0].card.card.info;

    const {itemCards} = menuInfo.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card.card
    console.log("recco")
    console.log(itemCards)
    console.log("reccoq ")


    // console.log("name : " + name)



    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}</h3>
            <p>{city + "," + locality} </p>
            <h3>{avgRating}</h3>

            <h2>Menu</h2>

            {
                itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {"Rs "}
                        {item.card.info.price/100 || item.card.info.defaultPrice/100}
                    </li>
                ))
            }
        </div>
    )
}

export default RestaurantMenu;