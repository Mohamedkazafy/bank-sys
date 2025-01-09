import React from 'react'

const Header = ({type = "title", title, subtext, user}:HeaderBoxProps) => {
  return (
    <div className='header-box'>
        <h1 className='header-box-title'>
            {title}
            {type === 'greeting' && <span className='text-bankGradient'>&nbsp;{user}</span>}    
        </h1>
        <p >{subtext}</p>
    </div>
  )
}

export default Header