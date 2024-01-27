import React from 'react';
import './financialInfo.scss';
import NetProfit from '../../components/netProfit/NetProfit';
import NetRevenue from '../../components/netRevenue/NetRevenue';

function FinancialInfo() {
  return (
    <div className="financialInfoContainer">
      <div className="box box1">
        <NetRevenue />
      </div>
      <div className="box box2">
        <NetProfit />
      </div>
    </div>
  )
}

export default FinancialInfo