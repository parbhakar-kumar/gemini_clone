import React, { useState } from 'react'
import menu_icon from '../../assets/menu_icon.png'
import plus_ico from '../../assets/plus_icon.png'
import message_icon from '../../assets/message_icon.png'
import question_icon from '../../assets/question_icon.png'
import history_icon from '../../assets/history_icon.png'
import setting_icon from '../../assets/setting_icon.png'
import { p } from 'motion/react-client'


function Side() {

const [extended, setExtended] = useState(false);



  return (
    <>
      <div className="sidebar  flex-col bg-gray-400 w-2xs h-screen justify-between inline-flex p-5">
        <div className="uper ">
        <div className="menu m-5">
          <img onClick={()=>setExtended(prev=>!prev)} src={menu_icon} alt="menu" />
          <div className="new_chat m-5 inline-flex bg-gray-600 mask-radial-lg p-2 rounded-4xl gap-2 items-center cursor-pointer ">
            <img src={plus_ico} alt="" /> 
            {extended ? <p>New chat</p> : null}
          </div>
          {extended ?  <div className="recent"> 
            <p className="recent_title mt-20 mb-14 ">Recent</p>
            <div className="recent_enery inline-flex gap-2 items-center cursor-pointer hover:bg-gray-600 p-2 rounded-4xl ">
              <img src={message_icon} alt="" />
              <p>what is recat...</p>
            </div>
          </div> : null}
         
        </div>
      </div>
      <div className="lour ">
        <div className="lour-item_recent_entery inline-flex gap-2 p-4 items-center cursor-pointer">
          <img src={question_icon} alt="" />
          {extended ?<p>help</p>:null}
        </div>
        <div className="inline-flex gap-2 items-center p-8 cursor-pointer">
          <img src={history_icon} alt="" />
          {extended?<p>history</p>:null}
        </div>
        <div className="inline-flex gap-2 p-4 items-center cursor-pointer">
          <img src={setting_icon} alt="" />
          {extended ? <p>setting</p>:null}
        </div>
      </div>
      </div>
    </>
  )
}

export default Side
