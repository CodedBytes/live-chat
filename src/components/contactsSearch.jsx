import React from 'react'

const contactsSearch = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" name="username" id="username" required placeholder="Encontrar usuario.." />
      </div>
      <div className="userChat">
        <img src="https://avatars.githubusercontent.com/u/137921917?v=4" alt="" />
        <div className="userChatInfo">
          <span>João Victor</span>
        </div>
      </div>
    </div>
  )
}

export default contactsSearch