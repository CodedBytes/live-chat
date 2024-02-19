import React from 'react'
import Cam from '../imgs/cam.png'
import Add from '../imgs/add.png'
import More from '../imgs/more.png'
import Messages from '../components/chatMessages'
import InputComponent from '../components/chatInputPainel'

const chat = () => {
  return (
    <div className="chat-area">
      <div className="chatInfo">
        <span>João Victor</span>

        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      
      <Messages />
      <InputComponent />
    </div>
  )
}

export default chat