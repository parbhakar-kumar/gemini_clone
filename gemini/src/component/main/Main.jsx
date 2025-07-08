import React from 'react'
import user_icon from '../../assets/user_icon.png'
function Main() {
  return (
      <div className="main  ">
        <div className="nav justify-between flex ">
            <div className="l"><p className="flex-1">Gemini</p></div>
          <div className="r">  <img className='w-10 rounded-3xl' src={user_icon} alt="" /></div>
        </div>
      </div>
  )
}

export default Main
