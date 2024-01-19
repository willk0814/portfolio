import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import Project Data from storage
import { ProjectData } from './ProjectData';

// Import Pathfinder Image
import pathfinder from '../../assets/pathfinder.png'

export default function ProjectTile() {
  const [selectedId, setSelectedId] = useState(null);

  const selectSection = (section) => {
    if (section === selectedId) {
      setSelectedId(null);
    } else {
      setSelectedId(section);
    }
  };

  return (
    <div className='pageContainer' name='projects'>
      <h1 className='text-white text-8xl'>Projects</h1>

      <div className='sm:grid grid-cols-3 grid-rows-2 gap-6 m-8 max-w-3xl flex flex-wrap'>
        {ProjectData.map((item, i) => (
          <motion.div
          className={selectedId === item.id ? 'projectCard_expanded' : 'projectCard'}
          key={i}
          layout
          onClick={() => selectSection(item.id)}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            
            
            <img src={pathfinder} 
              className='m-0 rounded-sm absolute'/>
            <motion.h2 className='text-white text-3xl z-index:2'>{item.title}</motion.h2>
            
            <motion.h5 className={`${selectedId === item.id ? '' : 'hidden'} text-white`}>{item.details}</motion.h5>
            
          </motion.div>
        ))}
        {selectedId && <motion.div
            className='dimmingLayer'
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}/>}
      </div>
    </div>
  );
}
