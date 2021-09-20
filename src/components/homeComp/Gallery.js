
import { Link, useHistory} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Pagination, Navigation
} from 'swiper'; 

import "./styles/Gallery.css";
import { useApp } from '../../contexts/AppContext';

SwiperCore.use([Pagination, Navigation]);
  
export const Gallery = () => { 

    const history = useHistory();
    
    //const [bannerItems, setBannerItems] = useState([]);
    const {bannerItems, setBannerItems, handleStatesAftRedirect} = useApp();
/*
    const fetchBannerItems = async () => {
        try{
            const items = await axios.get("https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details");
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
    */

        
    return (
        <div className="gallery">
            <Swiper navigation={true} pagination={{"dynamicBullets": true}} className="mySwiper" loop>
                {bannerItems?.map((_item, _index) => {
                    return (
                        <SwiperSlide className="mySlide" key={_index}>
                            <img src={_item.ImageUrl} alt="banner" />
                            <div className="slide-text">
                                        <h1>{_item.Title}</h1>
                                        <p>{_item.Subtitle}</p>
                                        <button className="contactus-btn" onClick={() => { handleStatesAftRedirect(); history.push('/contact-us'); }}>Contact us</button>
                                    
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            
        </div>
    )
}

//or button wrapped by Link -> see Service.js