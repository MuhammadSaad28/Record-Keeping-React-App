import React from 'react'
import './Fields.css'
import DeleteIcon from '@mui/icons-material/Delete';

function Fields({name,email,index,onRemove}) {

  return (
    <>
    <div className='resul'>
    <div className='result'>
    
      <h4>{name}</h4>
      <h4>{email}</h4>
      <button onClick={()=>onRemove(index)}><DeleteIcon/></button>

    </div>
    </div>
    </>
  )
}

export default Fields
