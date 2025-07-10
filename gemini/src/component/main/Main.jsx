import React from "react";
import user_icon from "../../assets/user_icon.png";
import compass from "../../assets/compass.png";
import bulb_icon from "../../assets/bulb_icon.png";
import message_icon from "../../assets/message_icon.png";
import code_icon from "../../assets/code_icon.png";
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

        <div className="main_bottom">
          <div className="search-box">
            <input type="text" />
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
