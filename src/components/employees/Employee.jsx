import React from "react";
import "./employee.scss";
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { totalEmployeeList } from "../../utility/data";

function Employee( employeeDataset ) {
  return (
    <div className="employeeBox">
      <div className="boxInfo">
        <div className="title">
          <span className="mainTitle">{totalEmployeeList.title}</span>
          <span className="subTitle">
          <ion-icon name="sync-outline"></ion-icon>{totalEmployeeList.date}
          </span>
        </div>
        <h1>{totalEmployeeList.totalEmployees}</h1>
        <Link to="/" className="genderLegend">
          <span className="male">
            <div className="check"></div>
            {`${totalEmployeeList.males}% Males`}
        </span>
          <span className="female">
            <div className="checkFemale"></div>
            {`${totalEmployeeList.females}% Females`}
        </span>
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chat">
          {/* <Bar
            data={employeeDataset}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Employee;
