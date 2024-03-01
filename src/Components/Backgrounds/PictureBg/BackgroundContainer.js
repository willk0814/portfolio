import React from 'react'

import darkLeaves from "../../../assets/backgrounds/andrew-neel-jtsW--Z6bFw-unsplash.jpg"
import desert from "../../../assets/backgrounds/neom-TA5hw14Coh4-unsplash.jpg"
import kyloRen from "../../../assets/backgrounds/venti-views-35uZM_4wjYg-unsplash.jpg"

export default function BackgroundContainer() {
  return (
    <div 
        className="fixed inset-0 min-h-screen bg-cover bg-center" 
        style={{backgroundImage: `url(${kyloRen})` }}>
    </div>
    )}
