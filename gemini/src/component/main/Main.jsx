import React from "react";
import user_icon from "../../assets/user_icon.png";
import compass from "../../assets/compass.png";
import bulb_icon from "../../assets/bulb_icon.png";
import message_icon from "../../assets/message_icon.png";
import code_icon from "../../assets/code_icon.png";
import gallery_icon from "../../assets/gallery_icon.png";
import mic_icon from "../../assets/mic_icon.png";
import send_icon from "../../assets/send_icon.png";
function Main() {
  return (
    <div className="main  ">
      <div className="nav justify-between flex ">
        <div className="l">
          <p className="flex-1">Gemini</p>
        </div>
        <div className="r">
          {" "}
          <img className="w-10 rounded-3xl" src={user_icon} alt="" />
        </div>
      </div>
      <div className="main_contenar max-w-2xl m-a ">
        <div className="greet my-12 mx-0 text-4xl">
          <p>
            <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
              hello prabh
            </span>
          </p>
          <p>How can help ypu todey</p>
        </div>
        <div className="cards-container flex gap-4">
          <div className="card">
            <p> suggest beautiful places to see on an upcoming road trip</p>
            <img src={compass} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarrize this consept: under planning</p>
            <img src={bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work reareat </p>
            <img src={message_icon} alt="" />
          </div>
          <div className="card">
            <p>Inprove the readabillity of the following code.</p>
            <img src={code_icon} alt="" />
          </div>
        </div>

        <div className="main_bottom absolute bottom-10 w-full max-w-[1000px] px-7 mx-auto">
          <div className="search-box flex items-center justify-between gap[20px] bg-[#f0f4f9] w-3xl px-5py-2.5 rounded-[50px]">
            <input className=" flex-1 bg-transparent border-none outline-none p-[8px] text-[18px] " placeholder="Enter a prompt hear" type="text" />
            <div className="w-[24px] cursor-pointer flex ">
              <img className="" src={gallery_icon} alt="" />
              <img className="" src={mic_icon} alt="" />
              <img className="" src={send_icon} alt="" />
            
            </div>
          </div>
           <div className="bottom-info text-[13px] mt-10  align-center font-light-300">
                <p>
                Gemini may display inaccurate info including about pepole-check
                its esponses. your privacy and Gemieni apps
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
