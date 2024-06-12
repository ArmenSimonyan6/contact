import React from 'react'

const ContactForm = ({ addNewPost, setContact, contact, setView, view }) => {

  return (
    <div>
      { view ? <div className='add-view-contact'><button onClick={() => setView(false)}>Add Contact</button></div> :
        <form onSubmit={addNewPost} className='form'>
          <div>
          <input value={contact.url} placeholder='URL' onChange={(e) => setContact({
            ...contact,
            url: e.target.value
          })} />

          <input value={contact.name} placeholder='Name' onChange={(e) => setContact({
            ...contact,
            name: e.target.value
          })} />

          <input value={contact.surname} placeholder='Surname' onChange={(e) => setContact({
            ...contact,
            surname: e.target.value
          })} />

          <input value={contact.email} placeholder='Email' onChange={(e) => setContact({
            ...contact,
            email: e.target.value
          })} />

          <input value={contact.phone} placeholder='Phone' onChange={(e) => setContact({
            ...contact,
            phone: e.target.value
          })} />

          <button>Add</button>
          </div>
        </form>
      }
    </div>
  )
}

export default ContactForm