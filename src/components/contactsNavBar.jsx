import React from 'react'

const contactsNavBar = () => {
  return (
    <div className="c-navbar">
      <span className="logo">Live Chat</span>

      <div className="user">
        <img src="https://avatars.githubusercontent.com/u/137921917?v=4" alt="" />
        <span>João Victor</span>
        <button type="button">Sair</button>
      </div>
    </div>
  )
}

export default contactsNavBar