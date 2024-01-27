import React from 'react'
import Chart, { CategoryScale } from "chart.js/auto";
import './home.scss';
import Employee from '../../components/employees/Employee';
import { chartData, employeeDataset, fundChartData, netProfitData, totalEmployeeList } from '../../utility/data';
import InterestRatio from '../../components/interestRatio/InterestRatio';
import CreditScore from '../../components/creditScore/CreditScore';
import FundRaised from '../../components/fundRaised/FundRaised';
import NetProfit from '../../components/netProfit/NetProfit';

Chart.register(CategoryScale);

function Home() {

  return (
    <div className='home-container'>
      <div className="box box1">
        <Employee employeeDataset={employeeDataset}  />
      </div>
      <div className="box box2">
        <CreditScore chartData={chartData} />
      </div>
      <div className="box box3">
        <InterestRatio />
      </div>
      <div className="box box4">
        <FundRaised fundChartData={fundChartData} />
      </div>
      <div className="box box5">
        <NetProfit netProfitData={netProfitData} />
      </div>
    </div>
  )
}

export default Home