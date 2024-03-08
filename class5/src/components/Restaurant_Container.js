import Restaurant_Card from "./Restaurant_Card"
import resObj from "../utils/MockData"
import { useState } from "react";

// const resObj = [
//     {
//       "info": {
//         "id": "40414",
//         "name": "Bikanervala",
//         "cloudinaryImageId": "k1ppyflw5ypymt3rayid",
//         "locality": "Connaught Place",
//         "areaName": "Connaught Place",
//         "costForTwo": "₹300 for two",
//         "cuisines": [
//           "North Indian",
//           "Snacks",
//           "Chaat",
//           "Sweets"
//         ],
//         "avgRating": 4.2,
//         "parentId": "45936",
//         "avgRatingString": "4.2",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 26,
//           "lastMileTravel": 4.6,
//           "serviceability": "SERVICEABLE",
//           "slaString": "26 mins",
//           "lastMileTravelString": "4.6 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-03-06 23:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "v1695133679/badges/Pure_Veg111.png",
//               "description": "pureveg"
//             }
//           ]
//         },
//         "isOpen": true,
//         "aggregatedDiscountInfoV2": {},
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "pureveg",
//                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {},
//             "textExtendedBadges": {}
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {},
//             "video": {}
//           }
//         },
//         "reviewsSummary": {},
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {}
//       },
//       "analytics": {},
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/bikanervala-connaught-place-delhi-40414",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "399525",
//         "name": "KFC",
//         "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
//         "locality": "Kashmere Gate Metro Station",
//         "areaName": "Kashmiri Gate",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Burgers",
//           "Biryani",
//           "American",
//           "Snacks",
//           "Fast Food"
//         ],
//         "avgRating": 4.2,
//         "parentId": "547",
//         "avgRatingString": "4.2",
//         "totalRatingsString": "100+",
//         "sla": {
//           "deliveryTime": 30,
//           "lastMileTravel": 3.6,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30 mins",
//           "lastMileTravelString": "3.6 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-03-06 22:01:00",
//           "opened": true
//         },
//         "badges": {},
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {},
//             "textBased": {},
//             "textExtendedBadges": {}
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "20% OFF",
//           "subHeader": "UPTO ₹50"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {},
//             "video": {}
//           }
//         },
//         "reviewsSummary": {},
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {}
//       },
//       "analytics": {},
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/kfc-kashmere-gate-metro-station-kashmiri-gate-delhi-399525",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "253765",
//         "name": "McDonald's",
//         "cloudinaryImageId": "535fc9f9c135f7982317bbb6a64a1ffc",
//         "locality": "Kumar Theatre",
//         "areaName": "Chandni Chowk",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "American"
//         ],
//         "avgRating": 4.3,
//         "parentId": "630",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 22,
//           "lastMileTravel": 1.8,
//           "serviceability": "SERVICEABLE",
//           "slaString": "22 mins",
//           "lastMileTravelString": "1.8 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-03-06 23:58:00",
//           "opened": true
//         },
//         "badges": {},
//         "isOpen": true,
//         "aggregatedDiscountInfoV2": {},
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {},
//             "textBased": {},
//             "textExtendedBadges": {}
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {},
//             "video": {}
//           }
//         },
//         "reviewsSummary": {},
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {}
//       },
//       "analytics": {},
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/mcdonalds-kumar-theatre-chandni-chowk-delhi-253765",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "38925",
//         "name": "Domino's Pizza",
//         "cloudinaryImageId": "mdl4tnyc8wbvysqxzhnq",
//         "locality": "Netaji Subhash Marg",
//         "areaName": "Daryaganj",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Pizzas",
//           "Italian",
//           "Pastas",
//           "Desserts"
//         ],
//         "avgRating": 4.2,
//         "parentId": "2456",
//         "avgRatingString": "4.2",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 25,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25 mins",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-03-07 01:55:00",
//           "opened": true
//         },
//         "badges": {},
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {},
//             "textBased": {},
//             "textExtendedBadges": {}
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "30% OFF",
//           "subHeader": "UPTO ₹75"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {},
//             "video": {}
//           }
//         },
//         "reviewsSummary": {},
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {}
//       },
//       "analytics": {},
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/dominos-pizza-netaji-subhash-marg-daryaganj-delhi-38925",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "128116",
//         "name": "La Pino'z Pizza",
//         "cloudinaryImageId": "hgvtyqrxzvpwmbs361er",
//         "locality": "Kamla Nagar",
//         "areaName": "Kamla Nagar",
//         "costForTwo": "₹250 for two",
//         "cuisines": [
//           "Pizzas",
//           "Pastas",
//           "Italian",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 4.1,
//         "parentId": "4961",
//         "avgRatingString": "4.1",
//         "totalRatingsString": "5K+",
//         "sla": {
//           "deliveryTime": 32,
//           "lastMileTravel": 5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "32 mins",
//           "lastMileTravelString": "5.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-03-07 03:45:00",
//           "opened": true
//         },
//         "badges": {},
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {},
//             "textBased": {},
//             "textExtendedBadges": {}
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "20% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {},
//             "video": {}
//           }
//         },
//         "reviewsSummary": {},
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {}
//       },
//       "analytics": {},
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-kamla-nagar-delhi-128116",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "76225",
//         "name": "Subway",
//         "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
//         "locality": "Malka Ganj Road",
//         "areaName": "Kamla Nagar",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Salads",
//           "Snacks",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 4,
//         "parentId": "2",
//         "avgRatingString": "4.0",
//         "totalRatingsString": "5K+",
//         "sla": {
//           "deliveryTime": 31,
//           "lastMileTravel": 5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "31 mins",
//           "lastMileTravelString": "5.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-03-06 23:59:00",
//           "opened": true
//         },
//         "badges": {
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "options available",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {},
//             "textBased": {},
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "options available"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "₹200 OFF",
//           "subHeader": "ABOVE ₹549",
//           "discountTag": "FLAT DEAL"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {},
//             "video": {}
//           }
//         },
//         "reviewsSummary": {},
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {}
//       },
//       "analytics": {},
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/subway-malka-ganj-road-kamla-nagar-delhi-76225",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "8614",
//         "name": "Burger King",
//         "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
//         "locality": "Connaught Place",
//         "areaName": "Connaught Place",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Burgers",
//           "American"
//         ],
//         "avgRating": 4.4,
//         "parentId": "166",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 26,
//           "lastMileTravel": 4.5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "26 mins",
//           "lastMileTravelString": "4.5 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-03-07 01:00:00",
//           "opened": true
//         },
//         "badges": {},
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {},
//             "textBased": {},
//             "textExtendedBadges": {}
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "60% OFF",
//           "subHeader": "UPTO ₹120"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {},
//             "video": {}
//           }
//         },
//         "reviewsSummary": {},
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {}
//       },
//       "analytics": {},
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/burger-king-connaught-place-delhi-8614",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "16865",
//         "name": "Pizza Hut",
//         "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//         "locality": "Near Tibetian Market",
//         "areaName": "Connaught Place",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Pizzas"
//         ],
//         "avgRating": 3.9,
//         "parentId": "721",
//         "avgRatingString": "3.9",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 30,
//           "lastMileTravel": 4.7,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30 mins",
//           "lastMileTravelString": "4.7 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-03-06 23:00:00",
//           "opened": true
//         },
//         "badges": {},
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {},
//             "textBased": {},
//             "textExtendedBadges": {}
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {},
//             "video": {}
//           }
//         },
//         "reviewsSummary": {},
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {}
//       },
//       "analytics": {},
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/pizza-hut-near-tibetian-market-connaught-place-delhi-16865",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "302684",
//         "name": "Barbeque Nation",
//         "cloudinaryImageId": "v4ryntwbvxuogbwfg3kj",
//         "locality": "Connaught Place",
//         "areaName": "Connaught Place",
//         "costForTwo": "₹600 for two",
//         "cuisines": [
//           "North Indian",
//           "Barbecue",
//           "Biryani",
//           "Kebabs",
//           "Mughlai",
//           "Desserts"
//         ],
//         "avgRating": 4.1,
//         "parentId": "2438",
//         "avgRatingString": "4.1",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 29,
//           "lastMileTravel": 5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "29 mins",
//           "lastMileTravelString": "5.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-03-06 23:30:00",
//           "opened": true
//         },
//         "badges": {},
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {},
//             "textBased": {},
//             "textExtendedBadges": {}
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹90"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {},
//             "video": {}
//           }
//         },
//         "reviewsSummary": {},
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {}
//       },
//       "analytics": {},
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/barbeque-nation-connaught-place-delhi-302684",
//         "type": "WEBLINK"
//       }
//     }
// ]

const Restaurant_Container = ()=>{

    const [resData , setResData] = useState(resObj);

    function clickHandler(){

        setResData(resData.filter((res) =>
            res.info.avgRating>4.1
        ));

       
    }


    return(
        <div>
              <div>
                <button className="filter-btn" onClick={clickHandler}>Filter Button</button>
            </div>
        <div className="restaurants">

          
          

            {/* <Restaurant_Card/> */}
            {/* <Restaurant_Card resData = {resObj[0]}/>
            <Restaurant_Card resData = {resObj[1]}/>
            <Restaurant_Card resData = {resObj[2]}/>
            <Restaurant_Card resData = {resObj[3]}/>
            <Restaurant_Card resData = {resObj[4]}/>
            <Restaurant_Card resData = {resObj[5]}/>
            <Restaurant_Card resData = {resObj[6]}/>
            <Restaurant_Card resData = {resObj[7]}/>
            <Restaurant_Card resData = {resObj[8]}/> */}

            {
                resData.map((restaurant) => {
                    return(
                        <Restaurant_Card resData = {restaurant}/>
                    )
                })
            }
            
        </div>
        </div>
    )
}


export default Restaurant_Container