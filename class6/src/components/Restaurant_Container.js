import Restaurant_Card from "./Restaurant_Card"
import Shimmer from "./Shimmer"
// import resObj from "../utils/MockData"
import { useState,useEffect } from "react";



const Restaurant_Container = ()=>{

    const [resData , setResData] = useState([]);

    function clickHandler(){

        setResData(resData.filter((res) =>
            res.info.avgRating>4.1
        ));
    }



    useEffect(()=>{
        fetchData();
       },[])

       const fetchData = async () =>{
        
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json();
            console.log(json)
            const restaurantData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            // const restaurantData =json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
            // const restaurantData =json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
   
            setResData(restaurantData)
            console.log("dkmkm")
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        // 
       }

      
    //    if(resData.length === 0 )
    //    {
    //     return <h1>Loading....</h1>;
    //    }


    //  can add shimmer till data comming from api
    //      if(resData.length === 0 )
    //    {
    //     return <Shimmer/>;
    //    }


    // return(
    //     <div>
    //           <div>
    //             <button className="filter-btn" onClick={clickHandler}>Filter Button</button>
    //         </div>
    //     <div className="restaurants">


    //         {
    //             resData.map((restaurant) => {
    //                 return(
    //                     <Restaurant_Card  key={restaurant.info.id} resData = {restaurant}/>
    //                 )
    //             })
    //         }
            
    //     </div>
    //     </div>
    // )






    // added ternary operator

    const[searchText,setsearchText] = useState("");

    function changeHandler(event){
        console.log(event.target.value);
        setsearchText(event.target.value)
    }

    function clickHandler1()
    {
        const updatedresData = resData.filter((element) => element.info.name.includes(searchText))

        setResData(updatedresData)
    }

   return resData.length === 0 ? <Shimmer/> :(
        <div>
              <div className="btns">
              <div>
                <button className="filter-btn" onClick={clickHandler}>Filter Button</button>
            </div>
          
            <input type="text" className="search" value = {searchText} id="ss" onChange={changeHandler}/>
              
              <button onClick={clickHandler1}>search</button>
              </div>
 
        <div className="restaurants">


            {
                resData.map((restaurant) => {
                    return(
                        <Restaurant_Card  key={restaurant.info.id} resData = {restaurant}/>
                    )
                })
            }
            
        </div>
        </div>
    )
}


export default Restaurant_Container