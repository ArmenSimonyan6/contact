import './App.css';
import { useState } from "react"
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

function App() {

  const [contacts, setContacts] = useState([
    {id: Math.random(), url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s", name: "Владимир", surname: "Путин", email: "putin@gmail.com", phone: "+700-777-777-77" },
  ])
  const [contact, setContact] = useState("")
  const [view, setView] = useState(true)

  const addNewPost = (e) => {
    e.preventDefault()

    setView(false)

    if(!contact.name || !contact.surname || !contact.email || !contact.phone) return

    setContacts([
      ...contacts,
      {
        id: new Date().getTime(),
        url: contact.url,
        name: contact.name,
        surname: contact.surname,
        email: contact.email,
        phone: contact.phone
      }
    ])

    setContact({
      ...contact,
      url: "",
      name: "",
      surname: "",
      email: "",
      phone: ""
    })

    setView(true)
  }

  const deleteContact = (id) => {
    setContacts([...contacts.filter(contact => contact.id !== id)])
  }

  return (
    <div className="App">
      <ContactForm addNewPost={addNewPost} contact={contact} setContact={setContact} view={view} setView={setView} />
      <ContactList contacts={contacts} deleteContact={deleteContact}/>
    </div>
  );
}

export default App;
