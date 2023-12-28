import React from 'react'
import iitbhu from "./images/iitbhu.png"
import satellite from "./images/satellite.jpg"
const Research = () => {
  return (
    <div id="research" name="research" className='w-full h-full bg-gradient-to-b from-gray-800 to-gray-800
    text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                 Experience 
                </p>
            </div>
            <p className='text-xl mt-15'>
              <div className='w-2/3 md:w-1/2 h-full mx-auto text-center'>
               <img className="w-100 h-100 rounded-full  m-auto" src={iitbhu} alt="iit_bhu"/><br/>
               <b className='text-center text-gray-400 '>Indian Institute of Technology, Varanasi (IIT-BHU)</b><br/><br/>
               <b className='text-center text-3xl'>Student Research Internship</b>
               
              </div>
              <br/>
            During my research internship at IIT (BHU), under the esteemed guidance of Dr. Rajeev Srivastava, I
            focused on studying and implementing a Deep Learning-based architecture for Single Object
            Tracking in Satellite Videos.The project revolved around implementation of Transformer tracking
            and Correlation, while achieving impressive results.
            </p>
            
        </div>
    </div>
  )
}

export default Research
