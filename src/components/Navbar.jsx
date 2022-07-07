import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav style={{width:'100%', padding:'20px', backgroundColor:'#000', boxShadow: '0px 8px 16px 0px rgba(27, 27, 27, 0.2)'}}>
        <ul >
          <Link to='/'><li style={{listStyleType:'none', display:'inline', color:'#fff'}}>Home</li></Link>
          <Link to='/add'><li className='item' style={{listStyleType:'none', display:'inline', marginLeft:'15px', color:'#fff'}}>Add Contact</li></Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
