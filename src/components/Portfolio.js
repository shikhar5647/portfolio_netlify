import React from 'react'
import covid from "./images/covid.jpg"
import stock from "./images/stock.png"
import wiki from "./images/wiki.jpg"
import cse from "./images/cse.jpg"
import drug from "./images/drug.png"
import satellite from "./images/satellite.jpg"

const Portfolio = () => {
    const portfolios = [
        {
            id:1,
            src: satellite,
            link:"https://github.com/pointarcher02/Deep-learning-based-architecture-for-object-tracking-in-satellite-images",
            title:"Deep Learning based architecture for single object tracking in satellite images."
        },
        {
            id:2,
            src: cse,
            link:"https://github.com/pointarcher02/CSE-Society-Application",
            title:"CSE Society Application."
        },
        {
            id:3,
            src: covid,
            link:"https://github.com/pointarcher02/Covid-19-Face-Mask-detection-with-Live-Video-Surveillance",
            title:"Covid 19 Face Mask detection with Live-Video Surveillance."
        },
        {
            id:4,
            src: stock,
            link:"https://github.com/pointarcher02/Stock-Price-Prediction-And-Forecasting-Using-Stacked-LSTM--Deep-Learning",
            title:"Stock Price Prediction And Forecasting Using Stacked-LSTM."
        },
        {
            id:5,
            src: wiki,
            link:"https://github.com/pointarcher02/Wikepedia-Toxic-Comment-classification",
            title:"Wikepedia Toxic Comment Classification."
        },
        
        {
            id:6,
            src: drug,
            link:"https://github.com/pointarcher02/Computational-Drug-Discovery-for-Alzheimer-s-disease",
            title:" Computational Drug Discovery for Alzheimer's disease."
        }
        

    ]

    
  return (
    <div id="portfolio" name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full box-border
    text-white md:h-full px-8'>
       <div className='max-w-screen-lg p-4 mx-auto flex flex-col
       justify-center w-full h-full'>
       <div className='pb-8'>
       <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
           Portfolio
       </p>
        <p className='py-6'> 

        </p>
       </div>
      </div> 
      
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12
      sm:px-0'>
        {portfolios.map(({id,src,link,title}) => (
           
        <div key ={id} className='shadow-md shadow-gray-600 rounded-lg'>
        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
        <div className='flex flex-col items-center justify-center'>
            <h3 className='m-2'>{title}</h3>
            <button className='w-1/2 px-6 py-3 border-gray-400 border-t-2 duration-200 hover:scale-105'><a href={link} target='_blank' rel="noreferrer">Code</a></button>
        </div>
       </div>
   
        ))}
      </div>
    </div>
  )
}

export default Portfolio