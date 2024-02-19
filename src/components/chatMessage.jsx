import React from 'react'

const chatMessage = () => {
  return (
    <div className="">
      <div className="message owner">
        <div className="messageInfo">
          <img src="https://avatars.githubusercontent.com/u/137921917?v=4" alt="" />
          <span>Agora</span>
        </div>

        <div className="messageContent">
            <p>Olá !!</p>
            <img src="https://avatars.githubusercontent.com/u/137921917?v=4" alt="" />
          </div>
      </div>

      <div className="message">
        <div className="messageInfo">
          <img src="https://avatars.githubusercontent.com/u/137921917?v=4" alt="" />
          <span>Agora</span>
        </div>

        <div className="messageContent">
            <p>Olá !!</p>
            <img src="https://avatars.githubusercontent.com/u/137921917?v=4" alt="" />
          </div>
      </div>
    </div>
  )
}

export default chatMessage