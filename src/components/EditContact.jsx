
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { editItem, getContacts } from '../features/contactsSlice';

const styles = {
    input:{
        height:'40px',
        padding:'10px'
    }
}

function EditContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
    const {id} = useParams();
    const dispatch = useDispatch();
    const contacts = useSelector((state)=> getContacts(state));
    console.log(contacts, 'cont');
    const currContact = contacts.find((contact)=> contact.id === id);
    useEffect(()=>{
      if(currContact){
        setName(currContact.name);
        setEmail(currContact.email);
        setNumber(currContact.number);
      }
    },[currContact])

    const handleEditBtn = (id)=>(e)=>{
      e.preventDefault();
      dispatch(editItem({id, name, email, number}));
    }

  return (
    <div className='box'>
      <h1>Edit Student {id}</h1>
      <form action="" style={{width:'27%',display:'flex', flexDirection:'column', gap:'20px'}} onSubmit={handleEditBtn(id)}>
        <input type="text" placeholder='name' style={styles.input} value={name} onChange={(e)=>setName(e.target.value)}   />
        <input type="email" placeholder='email' style={styles.input} value={email} onChange={(e)=>setEmail(e.target.value)}   />
        <input type="number" placeholder='number' style={styles.input} value={number} onChange={(e)=>setNumber(e.target.value)}   />
        <button type='submit' style={{height:'40px', padding:'10px'}} className='updBtn'>Update Student</button>
      </form>
    </div>
  )
}

export default EditContact