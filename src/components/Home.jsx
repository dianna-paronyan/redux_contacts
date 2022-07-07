import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteItem, getContacts } from "../features/contactsSlice";
import './style.css'

const styles = {
  border:{
    border:'1px solid #000',
    textAlign:'center',
    padding:'12px',
  }
}

function Home() {
  // const {id} = useParams();
  const navigate = useNavigate();
  const contacts = useSelector((state) => getContacts(state));
  const dispatch = useDispatch();

  useEffect(()=>{
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }),[contacts]

  const handleDeleteBtn = (id)=>()=>{
    dispatch(deleteItem({id}))
  }

  return (
    <div>
      <h1>Welcome to Redux Contacts Book</h1>
      <div className="table">
        <table>
          <thead>
            <tr style={styles.border}>
              <th style={styles.border}>#</th>
              <th style={styles.border}>Name</th>
              <th style={styles.border}>Email</th>
              <th style={styles.border}>Number</th>
              <th style={styles.border}>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((item) => {
              console.log(item.name);
              return (
                <tr key={item.id} style={styles.border}>
                  <td style={styles.border}>{item.id}</td>
                  <td style={styles.border}>{item.name}</td>
                  <td style={styles.border}>{item.email}</td>
                  <td style={styles.border}>{item.number}</td>
                  <td style={styles.border} className='btns'>
                    <button className="editBtn" onClick={()=> navigate(`/edit/${item.id}`)}>Edit</button>
                    <button className="delBtn" onClick={handleDeleteBtn(item.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
