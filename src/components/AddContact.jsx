import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, getContacts } from '../features/contactsSlice';


const styles = {
    input:{
        height:'40px',
        padding: '10px'
    }
}

function AddContact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');


  const contacts = useSelector((state)=> getContacts(state));
  const dispatch = useDispatch();

  const handleAddContactSubmit = (e)=>{
    e.preventDefault();

    if(!name.trim() || !email.trim() || !number.trim()){
      return
    }

      dispatch(add({name,email, number}));

    setName('');
    setEmail('');
    setNumber('');
  }

  return (
    <div className='box'>
      <h1>Add Contact</h1>
      <form  onSubmit={handleAddContactSubmit} action="" style={{width:'27%',display:'flex', flexDirection:'column', gap:'20px'}}>
        <input type="text" placeholder='Name' style={styles.input} value={name} onChange={(e)=>setName(e.target.value)}  />
        <input type="email" placeholder='Email' style={styles.input} value={email} onChange={(e)=>setEmail(e.target.value)}   />
        <input type="text" placeholder='Number' style={styles.input} value={number} onChange={(e)=>setNumber(e.target.value)}  />
        <button type='submit' style={styles.input} className='addBtn'>Add Contact</button>
      </form>
    </div>
  );
}

export default AddContact;
