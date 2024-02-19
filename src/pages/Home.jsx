import React from 'react'
import ContactsBar from '../components/contactsBar'
import Chat from '../components/chat'

const Home = () => {
  return (
    <div className="home-chat-container">
        <ContactsBar/>
        <Chat/>
    </div>
  )
}

export default Home