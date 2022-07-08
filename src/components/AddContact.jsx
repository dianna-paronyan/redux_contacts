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
  const [err, setErr] = useState(false);
  const [sameEmailErr, setSameEmailErr] = useState(false);
  const [sameNumberErr, setSameNumberErr] = useState(false);


  const contacts = useSelector((state)=> getContacts(state));
  const dispatch = useDispatch();


  const handleAddContactSubmit = (e)=>{
    e.preventDefault();
    
    const checkEmail = contacts.find((contact)=> contact.email === email);
      if(checkEmail?.email === email){
        setSameEmailErr(true);
        return
      }
      else{
        setSameEmailErr(false)
      }
      const checkNumber = contacts.find((contact)=> contact.number === number);
      if(checkNumber?.number === number){
        setSameNumberErr(true);
        return
      }  else{
        setSameNumberErr(false)
      }
      
      if(!name.trim() || !email.trim() || !number.trim()){
        setErr(true)
        return
      }  else{
        setErr(false)
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
        <input type="number" placeholder='Number' style={styles.input} value={number} onChange={(e)=>setNumber(e.target.value)}  />
        <button type='submit' style={styles.input} className='addBtn'>Add Contact</button>
      </form>
      {err ? <h4 style={{color:'red'}}>Please fill fields</h4> : null}
      {sameEmailErr ? <h4 style={{color:'red'}}>This email already used</h4> : null}
      {sameNumberErr ? <h4 style={{color:'red'}}>This number already used</h4> : null}
    </div>
  );
}

export default AddContact;
