import React, { useState } from 'react'

const ContactItem = (props) => {


  const [toggle, setTogle] = useState(null)
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")


  /////////////////////////////////////////////

  const editPosts = (id, name, surname, email, phone) => {
    setTogle(id)
    setName(name)
    setSurname(surname)
    setEmail(email)
    setPhone(phone)
  }


  const saveNote = (id) => {
    [props.post].map(post => {
      if (post.id == id) {
        post.name = name
        post.surname = surname
        post.email = email
        post.phone = phone
      }
      return post
    })
    setTogle(null)
  }



  return (

    <div className='contact-page'>



      {
        toggle == props.post.id ?
          <div></div>
          :
          <>
            <div className="picture">
              <picture>
                <img src={props.post.url} />
              </picture>
            </div>
            <div className='info'>
              <div className="info1">
                <div className="name">{props.post.name}</div>
                <div className="surname">{props.post.surname}</div>
              </div>
              <div className="info2">
                <div className="email">{props.post.email}</div>
                <div className="phone">{props.post.phone}</div>
              </div>
            </div>
          </>
      }


      {
        toggle == props.post.id ?
          <div>
            <form>
              <input value={name} onChange={(e) => setName(e.target.value)} />
              <input value={surname} onChange={(e) => setSurname(e.target.value)} />
              <input value={email} onChange={(e) => setEmail(e.target.value)} />
              <input value={phone} onChange={(e) => setPhone(e.target.value)} />
              <button onClick={() => saveNote(props.post.id)}>Save</button>
            </form>
          </div>
          :
          <>
            <div className='edit-delete'>
              <button className='edit' onClick={() => editPosts(props.post.id, props.post.name, props.post.surname, props.post.email, props.post.phone)}>Edit</button>
              <button className='delete' onClick={() => props.deleteContact(props.post.id)}>Delete</button>
            </div>
          </>
      }













      {/* <div>
        <div className="picture">
          <picture>
            <img src={props.post.url} />
          </picture>
        </div>
        <div className='info'>
          <div className="info1">
            <div className="name">{props.post.name}</div>
            <div className="surname">{props.post.surname}</div>
          </div>
          <div className="info2">
            <div className="email">{props.post.email}</div>
            <div className="phone">{props.post.phone}</div>
          </div>
        </div>
      </div> */}



    </div>
  )
}

export default ContactItem





































{/* 

import React, { useState } from 'react'

const ContactItem = (props) => {

  const [toggle, setTogle] = useState(null)
  const [value, setValue] = useState('')
  const [valueBody, setValueBody] = useState('')


  const editPosts = (id, name, body) => {
          setTogle(id)
          setValue(name)
          setValueBody(body)
  }


  const saveNote = (id) => {
          let newNote = [props.post].map(post => {
            if (post.id == id) {
              post.name = value
              post.body = valueBody
            }
            return post
          })
      setTogle(null)
  }

  return (
    
    <div className='contact-page'>
      {
        toggle == props.post.id ?
        <div></div>
        :
      <>
        <div className="picture">
            <picture>
                <img src={props.post.url}/>
            </picture>
        </div>
        <div className='info'>
           <div className="info1">
                <div className="name">{props.post.name}</div>
                <div className="surname">{props.post.surname}</div>
           </div>
           <div className="info2">
                <div className="email">{props.post.email}</div>
                <div className="phone">{props.post.phone}</div>
           </div>
      </>
      }

      {
        toggle == props.post.id ?
        <form>
              <input value={value} onChange={(e) => setValue(e.target.value)} />
              <input value={valueBody} onChange={(e) => setValueBody(e.target.value)} />
              <button onClick={() => saveNote(props.post.id)}>save</button>
        </form>
        :
        <>
        <div>
                <button className={stylesNote.delete} onClick={() => props.deleteNote(props.post.id)}>Delete</button>
                <button className={stylesNote.edit} onClick={() => editPosts(props.post.id, props.post.name, props.post.body)}>edit</button>
        </div>
        </>
      }
        
    </div>
  )
}

export default ContactItem */}