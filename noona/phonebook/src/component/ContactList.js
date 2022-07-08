import React from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContectItem'

const ContactList = () => {
  return (
    <div>
        <SearchBox/>
        <ContactItem/>
        <ContactItem/>
        <ContactItem/>
        <ContactItem/>
        <ContactItem/>
    </div>
  )
}

export default ContactList