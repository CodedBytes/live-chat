import React from 'react'
import ContactsNavBar from '../components/contactsNavBar'
import ContactsSearch from '../components/contactsSearch'
import Contacts from '../components/Contacts'

const contactsBar = () => {
  return (
    <div className="contacts-area">
      <ContactsNavBar />
      <ContactsSearch />
      <Contacts />
    </div>
  )
}

export default contactsBar