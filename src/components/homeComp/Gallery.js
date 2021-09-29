
import { Link, useHistory} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Pagination, Navigation
} from 'swiper'; 

import "./styles/Gallery.css";
import { useApp } from '../../contexts/AppContext';
import { API_ROOT_GET_IMAGES } from "../../constants"

SwiperCore.use([Pagination, Navigation]);
  
export const Gallery = () => { 

    const history = useHistory();
    
    const [bannerItems, setBannerItems] = useState([]);
    //const { bannerItems, setBannerItems, } = useApp();

    const fetchBannerItems = async () => {
        try{
            const items = await axios.get(API_ROOT_GET_IMAGES);
            if(items.status === 200 || items.statusText === 'OK'){
                setBannerItems(items.data.Details);
            }
        }catch(err){
            //console.log(err.response, err.response.status, err.response.statusText);
        }
    }
    useEffect(() => {
        fetchBannerItems();
    }, [])
    

        
    return (
        <div className="gallery">
            <Swiper navigation={true} loop
                pagination={{"dynamicBullets": true}} className="mySwiper" >
                {bannerItems?.map((_item, _index) => { console.log(_item.ImageUrl, _item.Title, _item.Subtitle)
                    return (
                        <SwiperSlide className="mySlide" key={_index}>
                            <img src={bannerItems[_index+1 === bannerItems.length ? 0 : (_index+1)].ImageUrl} alt="banner" />
                            <div className="slide-text">
                                        <h1>{bannerItems[_index+1 === bannerItems.length ? 0 : (_index+1)].Title}</h1>
                                        <p>{bannerItems[_index+1 === bannerItems.length ? 0 : (_index+1)].Subtitle}</p>
                                        <button className="contactus-btn" onClick={() => { history.push('/contact-us'); }}>Contact us</button>
                                    
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            
        </div>
    )
}
//<Swiper navigation={true} pagination={{"dynamicBullets": true}} className="mySwiper" loop>
//<Swiper navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev',}}>
////navigation: {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev',}
//pagination: {el: '.swiper-pagination', type: 'bullets',},
//<img src={_item.ImageUrl} alt="banner" />  <h1>{_item.Title}</h1> <p>{_item.Subtitle}</p>
//or button wrapped by Link -> see Service.js