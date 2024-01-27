import React from 'react'
import './navbar.scss';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://seeklogo.com/images/F/Finsec-logo-024A6F4F8F-seeklogo.com.gif" alt="" />
        <div className="companyCredentials">
          <span className='companyName'>PS Finsec Private Limited</span>
          <span className='companyCin'>CIN: U69120DL1996PTC08096</span>
          <span className='companyDomain'>www.psfinsec.com</span>
        </div>
      </div>
      <div className="icons">
        <div className="user">
          <ion-icon name="star"></ion-icon>
          <span>Add to Dashboard</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar