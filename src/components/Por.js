import React,{useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import swc from "./images/swc.jpg";
import 'swiper/css/pagination';
import bie from "./images/bie.png"
import "swiper/css/autoplay";
import '../styles.css';
import "./swiperStyle.css"
import ecell from "./images/ecell.png"
import youth from "./images/youth.png"
import google from "./images/google.png"
import cse from "./images/cse.png"
import iitj from "./images/iitj.jpg"
import cdc from "./images/cdc.png"
import saa from "./images/saa.png"
import tedx from "./images/tedx.png"
import { Navigation,Pagination,Autoplay} from 'swiper/modules';
const Por = () => {
    const [slide,setSlide] = useState(3);
    //let w = window.innerWidth;
    useEffect(()=>{
        if(window.innerWidth <= 600)
         setSlide(1);
        else if(window.innerWidth > 600 && window.innerWidth <= 1000)
         setSlide(2);
        else if(window.innerWidth > 1000)
         setSlide(3);
    },[])
    const styles = {
        backgroundColor : "inherit"
    }
  return (
    <div name="achievements" className='w-full h-full bg-gradient-to-b from-black  to-gray-900
    text-white mt-0 p-2'>
         <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                 Achievement & Responsibility  
                </p>
            </div>
            </div>
         <Swiper
        modules={[Pagination,Autoplay,Navigation]} 
        slidesPerView={slide}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay = {true}
        navigation={true}
        className="mySwiper"
      >
        {/* <SwiperSlide style={styles}>
            <div className='swiper-client-msg'>
                <p className='w-full'>
                 Assistant Head, ECELL, IIT Jodhpur
                </p>
            </div>
            <div className='img-container'>
              <img src={cdc} className="shadow-md hover:scale-105 duration-200 shadow-gray-600" alt=""/>
            </div>
        </SwiperSlide> */}
        <SwiperSlide style={styles}>
            <div className='swiper-client-msg'>
                <p className='w-full'>
                 Assistant Head, Prometeo, Indian Institute of Technology, Jodhpur 2024
                </p>
            </div>
            <div className='img-container'>
              <img src={iitj} className="shadow-md hover:scale-105 duration-200 shadow-gray-600" alt=""/>
            </div>
        </SwiperSlide>
        <SwiperSlide style={styles}>
            <div className='swiper-client-msg shadow-md shadow-gray-600'>
                <p>
                Assistant Head, Entrepreneurship Cell, IIT Jodhpur
                </p>
            </div>
            <div className='img-container'>
              <img src={ecell} className="shadow-md hover:scale-105 duration-200 shadow-gray-600" alt=""/>
            </div>
        </SwiperSlide>
        {/* <SwiperSlide style={styles}>
            <div className='swiper-client-msg shadow-md shadow-gray-600'>
                <p>
                Head, INAE-SERB Youth Conclave 2022, IIT Jodhpur
                </p>
            </div>
            <div className='img-container'>
              <img src={youth} className="shadow-md hover:scale-105 duration-200 shadow-gray-600" alt=""/>
            </div>
        </SwiperSlide> */}
        {/* <SwiperSlide style={styles}>
            <div className='swiper-client-msg shadow-md shadow-gray-600'>
                <p>
                Overall Coordinator, Society of Alumni Affairs, IIT Jodhpur
                </p>
            </div>
            <div className='img-container'>
              <img src={saa} className="shadow-md hover:scale-105 duration-200 shadow-gray-600" alt=""/>
            </div>
        </SwiperSlide> */}
        {/* <SwiperSlide style={styles}>
            <div className='swiper-client-msg shadow-md shadow-gray-600'>
                <p>
                Core Member, Google Developer Students Club
                </p>
            </div>
            <div className='img-container'>
              <img src={google} className="shadow-md hover:scale-105 duration-200 shadow-gray-600" alt=""/>
            </div>
        </SwiperSlide> */}
        {/* <SwiperSlide style={styles}>
            <div className='swiper-client-msg shadow-md shadow-gray-600'>
                <p>
                Society Executive, Computer Science Society IIT Jodhpur
                </p>
            </div>
            <div className='img-container'>
              <img src={cse} className="shadow-md hover:scale-105 duration-200 shadow-gray-600" alt=""/>
            </div>
        </SwiperSlide> */}
        {/* <SwiperSlide style={styles}>
            <div className='swiper-client-msg shadow-md shadow-gray-600'>
                <p>
                Student Guide, Student Wellbeing Committee, IIT Jodhpur
                </p>
            </div>
            <div className='img-container'>
              <img src={swc} className="shadow-md hover:scale-105 duration-200 shadow-gray-600" alt=""/>
            </div>
        </SwiperSlide> */}
       
        {/* <SwiperSlide style={styles}>
            <div className='swiper-client-msg shadow-md shadow-gray-600'>
                <p>
                Awarded with Certificate of Excellence for serving as the Overall Head in the Board of Innovation and
                Entrepreneurship
                </p>
            </div>
            <div className='img-container'>
              <img src={bie} className="shadow-md hover:scale-105 duration-200 shadow-gray-600" alt=""/>
            </div>
        </SwiperSlide> */}
        <SwiperSlide style={styles}>
            <div className='swiper-client-msg shadow-md shadow-gray-600'>
                <p>
                All India Rank 2 in Intermediate Examination, ISC Board.
                </p>
            </div>
            <div className='img-container'>
              <img src={iitj} className="shadow-md  hover:scale-105 duration-200 shadow-gray-600" alt=""/>
            </div>
        </SwiperSlide>

        <SwiperSlide style={styles}>
            <div className='swiper-client-msg shadow-md shadow-gray-600'>
                <p>
                Assistant Head, E-Conclave IIT Jodhpur, 2024
                </p>
            </div>
            <div className='img-container'>
              <img src={bie} className="shadow-md  hover:scale-105 duration-200 shadow-gray-600" alt=""/>
            </div>
        </SwiperSlide>
        
      </Swiper>
    
    </div>
  )
}

export default Por