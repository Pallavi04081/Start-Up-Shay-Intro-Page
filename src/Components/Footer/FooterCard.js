import React from 'react'
import './FooterCard.css'

function FooterCard({ele}) {
  return (
    <div className='FooterCard' style={{background:"white"}}>
        <img src={ele} style={{width:"70%",height:"70%",}}></img>
    </div>
  )
}

export default FooterCard