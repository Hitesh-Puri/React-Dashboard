import React from 'react';
import './metrices.scss';
import { keyMetrices } from '../../utility/data';

function Metrices() {
  return (
    <div className="metrices-container">
      <div className="title">
        <h3 className="mainTitle">Key Metrices</h3>
      </div>
      {keyMetrices.map((metrice) => (
        <div className="metrice-item" key={metrice.id}>
            <ion-icon name={metrice.icon} size="large"></ion-icon>
            <div className="metrice-details">
                <div className="metrice-name">{metrice.title}</div>
                <div className="metrice-subTitle">{metrice.subTitle}</div>
            </div>
            <div className="left-section">
                <div className="metrice-age">{metrice.creditAge}</div>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Metrices