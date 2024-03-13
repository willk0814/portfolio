import React from 'react'

import kyloRen from "../../../assets/backgrounds/venti-views-35uZM_4wjYg-unsplash.jpg"

// import nyc1 from '../../../assets/backgrounds/hannah-busing-0V6DmTuJaIk-unsplash.jpg'
// import nyc2 from '../../../assets/backgrounds/jermaine-ee-A2CChTZvzTE-unsplash.jpg'
// import rainforest from '../../../assets/backgrounds/ajit-singh-wJwx_jSgZuA-unsplash.jpg'
// import amsterdam from '../../../assets/backgrounds/azhar-j-t2hgHV1R7_g-unsplash.jpg'


export default function BackgroundContainer() {
  return (
    <div 
        className="fixed inset-0 min-h-screen bg-cover bg-center" 
        style={{backgroundImage: `url(${kyloRen})` }}>
    </div>
    )}
