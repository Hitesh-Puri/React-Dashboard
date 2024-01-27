export const menu = [
  {
    id: 1,
    title: "Overview",
    url: "/",
    icon: "eye-outline",
  },
  {
    id: 2,
    title: "Credit Details",
    url: "/creditDetails",
    icon: "card-outline",
  },
  {
    id: 3,
    title: "Financial Information",
    url: "/financialInfo",
    icon: "cash-outline",
  },
  {
    id: 4,
    title: "Financial Analysis",
    url: "/financialAnalysis",
    icon: "time-outline",
  },
  {
    id: 5,
    title: "Documents",
    url: "/documents",
    icon: "document-text-outline",
  },
  {
    id: 6,
    title: "Contact Info",
    url: "/contactInfo",
    icon: "information-circle-outline",
  },
];

export const keyMetrices = [
  {
    id: 1,
    title: "On Time Payments",
    subTitle: "On time payment completion in %",
    // url: "/",
    icon: "time-outline",
    creditAge: "92.3%",
  },
  {
    id: 2,
    title: "Credit Age",
    subTitle: "Total credit age since inception",
    // url: "/creditDetails",
    icon: "woman",
    creditAge: "3.4 years",
  },
  {
    id: 3,
    title: "Credit Utilisation",
    subTitle: "Available limit being utilized in %",
    // url: "/financialInfo",
    icon: "options-outline",
    creditAge: "44%",
  },
];

export const totalEmployeeList = {
  title: "No. of Employees",
  totalEmployees: "302",
  dataKey: "bar",
  date: "16 December, 2023",
  males: "62",
  females: "38",
};

export const employeeDataset = {
  labels: ["Male", "Female"],
  datasets: [{
    label: ["Male", "Female"],
    data: [62, 38],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
    ],
    borderWidth: 1
  }]
};

export const banks = [
  {
    id: 1,
    name: "Kotak Mahindra Bank",
    interestRate: 8.6,
    image:
      "https://companieslogo.com/img/orig/KOTAKBANK.NS-36440c5e.png?t=1593960269",
    loanAmount: 18.4,
  },
  {
    id: 2,
    name: "Bajaj Finance",
    interestRate: 12.3,
    image:
      "https://companieslogo.com/img/orig/BAJFINANCE.NS-1c922000.png?t=1593960949",
    loanAmount: 2.3,
  },
  {
    id: 3,
    name: "ICICI Bank",
    interestRate: 11.2,
    image:
      "https://companieslogo.com/img/orig/IBN-af38b5c0.png?t=1648383607",
    loanAmount: 3.8,
  },
];

export const companyInfo = {
  companyName: 'PS Finsec Private Limited',
  companyWebsite: "www.psfinsec.com",
  companyCIN: "U69120DL1996PTC080696",
  incorporationDate: '13, February, 2018',
  panNumber: 'PTRTR3928C',
  address: '67, Netaji Subash Place, New Delhi - 110083',
  comapnyEmail: "finance@psfinsec.com",
  companyMobile: "+91 011 2738282-88",
  mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6999.905800514788!2d77.1497305!3d28.691055499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0233444361b5%3A0xef2dea9ab6276ee!2sNetaji%20Subhash%20Place%2C%20Shakurpur%2C%20Delhi%2C%20110034!5e0!3m2!1sen!2sin!4v1706282049171!5m2!1sen!2sin'
};

export const Data = [
  {
    id: 1,
    year: "APR'23",
    creditScore: 762,
  },
  {
    id: 2,
    year: "JUN'23",
    creditScore: 800,
  },
  {
    id: 3,
    year: "SEP'23",
    creditScore: 780,
  },
  {
    id: 4,
    year: "DEC'23",
    creditScore: 726,
  },
  {
    id: 5,
    year: "APR'23",
    creditScore: 789,
  },
];

export const FundData = [
  {
    id: 1,
    fundName: "Debt Fund",
    fundRaised: 24,
  },
  {
    id: 2,
    fundName: "Equity Fund",
    fundRaised: 32.64,
  },
]

export const chartData = {
  labels: Data.map((data) => data.year), 
  datasets: [
    {
      label: "Credit Score ",
      data: Data.map((data) => data.creditScore),
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0"
      ],
      // borderColor: "black",
      // borderWidth: 2,
      fill: false,
      borderDash: Data.map((item, index) => (index === item.length - 1 ? [5, 5] : undefined)),
    }
  ]
};

export const fundChartData = {
  labels: FundData.map((data) => data.fundName), 
  datasets: [
    {
      label: "",
      data: FundData.map((data) => data.fundRaised),
      backgroundColor: ["#C84A02", "#d6e4ea"],
      // borderColor: "black",
      // borderWidth: 2,
      fill: false,
    }
  ]
};

export const netProfitData = {
  labels: [
    'January',
    'February',
    'March',
    'April'
  ],
  datasets: [{
    type: 'bar',
    label: 'Bar Dataset',
    data: [10, 20, 30, 40],
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor: 'rgba(255, 99, 132, 0.2)'
  }, {
    type: 'line',
    label: 'Line Dataset',
    data: [50, 50, 50, 50],
    fill: false,
    borderColor: 'rgb(54, 162, 235)'
  }]
};