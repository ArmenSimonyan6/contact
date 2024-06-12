import React from 'react'
import ContactItem from './ContactItem'

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
        {
           contacts.map((post) => <ContactItem key={post.id} deleteContact={deleteContact} post={post}/>)
        }
    </div>
  )
}

export default ContactList