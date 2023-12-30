import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
  const[show,SetShow]=useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>600){
        SetShow(true)
      }
      else{
        SetShow(false)
      }
    })
  })
  return (
    <div className={`${show && 'nav-bg'} nav`}>
       <img width={'150px'} src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="no Image" />
       </div>
  )
    
   
}

export default Nav