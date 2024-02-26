import React from 'react'

export default function CollapsedProjectTile({project_data}) {
  return (
    <div className='blurredContentContainer h-[20vh] w-[20vw] m-2 p-2'>
      <h1 className='text-white text-2xl'>{project_data.title}</h1>
    </div>
  )
}
