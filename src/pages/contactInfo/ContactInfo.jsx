import React from 'react';
import './contactInfo.scss';
import { companyInfo } from '../../utility/data';

function ContactInfo() {
  return (
    <div className="contact-info-container">
      <div className="left-section">
        <div className="companyName">
          <div className="company-name">{companyInfo.companyName}</div>
          <div className="company-website">{companyInfo.companyWebsite}</div>
        </div>
        <div className="divider"></div>
        <div className="company-cin"><strong>CIN: </strong>{companyInfo.companyCIN}</div>
        <div className="pan-number"><strong>PAN: </strong>{companyInfo.panNumber}</div>
        <div className="incorporation-date"><strong>Date Of Incorporation: </strong>{companyInfo.incorporationDate}</div>
        <div className="address"><strong>Add: <br /></strong>{companyInfo.address}</div>
        <div className="comEmail">
          <div>{companyInfo.comapnyEmail}</div>
          <div>{companyInfo.companyMobile}</div>
        </div>
      </div>
      <div className="right-section">
        <iframe
          title="Company Location"
          width="300"
          height="700"
          style={{ border: 0 }}
          src={companyInfo.mapSrc}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default ContactInfo
