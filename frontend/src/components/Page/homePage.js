import React, { useState } from 'react';
import './homePage.css';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

function HomePage() {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [data, setData] = useState(null);

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let url = 'http://localhost:8080/api/graphs';
    console.log(month);
    console.log(year);
    if (month && year) {
        url += `/day/${year}/${month}`;
    } else if (year) {
        url += `/month/${year}`;
    } else {
        url += `/year`;
    }

    axios.get(url, {responseType: 'blob'})
      .then(response => {
        console.log(response)
        console.log(response.data)
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  };

  const renderChart = () => {
    if (!data) return null;
    console.log(data);
    const chartData = {
      // labels: data.map(item => item.date),
      datasets: [{
        label: 'Energy Consumption',
        // data: data.map(item => item.consumption),
        data: data,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    };

    return <Line data={chartData} />;
  };

  return (
    <div className="HomePage">
      <main>
        <div className="chart-container">
          {/* {renderChart()} */}
          <img src={URL.createObjectURL(new Blob([data], { type: 'text/plain' }))} />
        </div>
        <form className="control-panel" onSubmit={handleSubmit}>
          <p>Bir seçenek seç ve geçmişteki enerji harcamalarına bak.</p>
          <div className="view-options">
            <label>
              <input
                type="radio"
                id="option1"
                value="option1"
                checked={selectedValue === "option1"}
                onChange={() => handleRadioChange("option1")}
              />
              Yıl
            </label>
            <label>
              <input
                type="radio"
                id="option2"
                value="option2"
                checked={selectedValue === "option2"}
                onChange={() => handleRadioChange("option2")}
              />
              Ay
            </label>
            <label>
              <input
                type="radio"
                id="option3"
                value="option3"
                checked={selectedValue === "option3"}
                onChange={() => handleRadioChange("option3")}
              />
              Gün
            </label>
          </div>
          {selectedValue === "option1" && (
            <div className="year-selector">
              {/* <select value={year} onChange={e => setYear(e.target.value)}>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
              </select> */}
              <button type="submit">GÖSTER</button>
            </div>
          )}
          {selectedValue === "option2" && (
            <div className="month-selector">
              {/* <select value={month} onChange={e => setMonth(e.target.value)}>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select> */}
              <select value={year} onChange={e => setYear(e.target.value)}>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
              </select>
              <button type="submit">GÖSTER</button>
            </div>
          )}
          {selectedValue === "option3" && (
            <div className="day-selector">
              {/* You can add additional inputs for day selection if needed */}
              {/* <select value={day} onChange={e => setDay(e.target.value)}>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select> */}
              <select value={month} onChange={e => setMonth(e.target.value)}>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
              <select value={year} onChange={e => setYear(e.target.value)}>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
              </select>
              <button type="submit">GÖSTER</button>
            </div>
          )}
        </form>
      </main>
    </div>
  );
}

// import React, { useState, Container, Image, Label, ImageContainer, ImageDiv, ChartImage, RadioDiv, RadioGroup, RadioButton, RadioLabel, Input, OptionDiv, Option, Select, YearContainer, ShowButton, MonthContainer, DayContainer, Wrapper } from 'react';
// import a from './a.png';
// import './homePage.css';

// const HomePage = () => {
//   const [selectedValue, setSelectedValue] = useState("option1");
//   const [selectedYear, setSelectedYear] = useState("2009");

//   const handleRadioChange = (value) => {
//     setSelectedValue(value);
//   };

//   const handleYearChange = (e) => {
//     setSelectedYear(e.target.value);
//   };

//   return (
//     <Wrapper>
//       <Container>
//         <Image>
//           <Label>A</Label>
//         </Image>
//         <ImageContainer>
//           <ImageDiv>
//             <ChartImage src={a} alt="" width="900" height="500" />
//           </ImageDiv>
//           <RadioDiv>
//             <RadioGroup>
//               <RadioLabel>Select an option:</RadioLabel>
//               <RadioButton>
//                 <Input
//                   type="radio"
//                   id="option1"
//                   value="option1"
//                   checked={selectedValue === "option1"}
//                   onChange={() => handleRadioChange("option1")}
//                 />
//                 <Label htmlFor="option1" className="radioLabel">
//                   Yearly
//                 </Label>
//               </RadioButton>
//               <RadioButton>
//                 <Input
//                   type="radio"
//                   id="option2"
//                   value="option2"
//                   checked={selectedValue === "option2"}
//                   onChange={() => handleRadioChange("option2")}
//                 />
//                 <Label htmlFor="option2" className="radioLabel">
//                   Monthly
//                 </Label>
//               </RadioButton>
//               <RadioButton>
//                 <Input
//                   type="radio"
//                   id="option3"
//                   value="option3"
//                   checked={selectedValue === "option3"}
//                   onChange={() => handleRadioChange("option3")}
//                 />
//                 <Label htmlFor="option3" className="radioLabel">
//                   Daily
//                 </Label>
//               </RadioButton>
//             </RadioGroup>
//             <OptionDiv>
//               {selectedValue === "option1" && (
//                 <YearContainer>
//                   <Label>
//                     <Select
//                       className="dropdownButton"
//                       defaultValue={selectedYear}
//                       value={selectedYear}
//                       onChange={handleYearChange}
//                     >
//                       <Option value="2009">2009</Option>
//                       <Option value="2008">2008</Option>
//                     </Select>
//                   </Label>
//                   <ShowButton>Show</ShowButton>
//                 </YearContainer>
//               )}
//               {selectedValue === "option2" && (
//                 <MonthContainer>
//                   <Label>
//                     <Select className="dropdownButton">
//                       <Option value="January">January</Option>
//                       <Option value="February">February</Option>
//                       {/* Add other months here */}
//                     </Select>
//                   </Label>
//                   <Label>
//                     <Select className="dropdownButton">
//                       <Option value="2007">2007</Option>
//                       <Option value="2008">2008</Option>
//                       {/* Add other years here */}
//                     </Select>
//                   </Label>
//                   <ShowButton>Show</ShowButton>
//                 </MonthContainer>
//               )}
//               {selectedValue === "option3" && (
//                 <DayContainer>
//                   <Label>
//                     <Select className="dropdownButton">
//                       <Option value="1">01</Option>
//                       <Option value="2">02</Option>
//                       {/* Add other days here */}
//                     </Select>
//                   </Label>
//                   <Label>
//                     <Select className="dropdownButton">
//                       <Option value="January">January</Option>
//                       <Option value="February">February</Option>
//                     </Select>
//                   </Label>
//                 </DayContainer>
//               )}
//             </OptionDiv>
//           </RadioDiv>
//         </ImageContainer>
//       </Container>
//     </Wrapper>
//   )
// }

// const HomePage = () => {
//   const [selectedValue, setSelectedValue] = useState(false);
//   const [selectedYear, setSelectedYear] = useState();

//   const handleRadioChange = (value) => {
//     setSelectedValue(value);
//   };

//   return (
//     <Wrapper>
//       <ImageContainer>
//         <img src={a} alt="" width="900" height="500" />
//       </ImageContainer>
//       <RadioGroup
//         selectedValue={selectedValue}
//         onRadioChange={handleRadioChange}
//       />
//       <OptionContainer selectedValue={selectedValue} />
//     </Wrapper>
//   );
// };

// const RadioGroup = ({ selectedValue, onRadioChange }) => {
//   return (
//     <div className="radio-group">
//       <label className="radio-label">Select an option:</label>
//       <div className="radio-button">
//         <input
//           type="radio"
//           id="option1"
//           value="option1"
//           checked={selectedValue === "option1"}
//           onChange={() => onRadioChange("option1")}
//         />
//         <label htmlFor="option1" className="radio-label">
//           Yearly
//         </label>
//       </div>
//       <div className="radio-button">
//         <input
//           type="radio"
//           id="option2"
//           value="option2"
//           checked={selectedValue === "option2"}
//           onChange={() => onRadioChange("option2")}
//         />
//         <label htmlFor="option2" className="radio-label">
//           Monthly
//         </label>
//       </div>
//       <div className="radio-button">
//         <input
//           type="radio"
//           id="option3"
//           value="option3"
//           checked={selectedValue === "option3"}
//           onChange={() => onRadioChange("option3")}
//         />
//         <label htmlFor="option3" className="radio-label">
//           Daily
//         </label>
//       </div>
//     </div>
//   );
// };

// const OptionContainer = ({ selectedValue }) => {
//   if (selectedValue === "option1") {
//     return (
//       <div className="year-container">
//         <label>
//           <select
//             className="dropdown-button"
//             defaultValue={"Year"}
//             value={selectedYear}
//             onChange={(e) => setSelectedYear(e.target.value)}
//           >
//             <option value="2007">2007</option>
//             <option value="2008">2008</option>
//           </select>
//         </label>
//         <button className="show-button">Show</button>
//       </div>
//     );
//   } else if (selectedValue === "option2") {
//     return (
//       <div className="month-container">
//         <label>
//           <select className="dropdown-button">
//             <option value="January">January</option>
//             <option value="February">February</option>
//           </select>
//         </label>
//         <label>
//           <select className="dropdown-button">
//             <option value="2007">2007</option>
//             <option value="2008">2008</option>
//           </select>
//         </label>
//         <button className="show-button">Show</button>
//       </div>
//     );
//   } else if (selectedValue === "option3") {
//     return (
//       <div className="day-container">
//         <label>
//           <select className="dropdown-button">
//             <option value="1">01</option>
//             <option value="2">02</option>
//           </select>
//         </label>
//         <label>
//           <select className="dropdown-button">
//             <option value="January">January</option>
//             <option value="February">February</option>
//           </select>
//         </label>
//         <label>
//           <select className="dropdown-button">
//             <option value="2007">2007</option>
//             <option value="2008">2008</option>
//           </select>
//         </label>
//         <button className="show-button">Show</button>
//       </div>
//     )
//   }
// }

// const Wrapper = styled.div`

//   .container {
//     display: inline-block;
//     align-items: center;
//   }

//   .image-container {
//     background-color: white;
//     display:flex;
//     flex-direction: row;
//   }

//   .image-div {
//     display: inline-block;
//     margin-right: 100px;
//     margin-top: 20px;
//     margin-left: 30px;
//     margin-bottom: 60px;
//   }

//   .option-div{
//     display:inline-block;
//     justify-content: space-around;
//     padding: 50px;
//     top: 50%;
//     font-size: 0;
//   }

//   .image{
//     background-image: url(https://img.freepik.com/free-photo/abstract-blue-rings-background_1017-3754.jpg);
//     background-repeat: no-repeat;
//     background-size: cover;
//     width: 208.8vh;
//     height: 140vh;
//   }

//   .first-button-container {
//     display: inline-block;
//     margin-right: 20px;
//   }

//   .year-container {
//     align-items: center;
//   }

//   .month-container {
//     align-items: center;
//   }

//   .day-container {
//     align-items: center;
//   }

//   .radio-label{
//     color: white;
//     font-size: 20px;
//   }

//   .radioGroup {
//     display:inline-block;
//     justify-content: space-around;
//     padding: 50px;
//     top: 50%;
//     font-size: 0;
//     margin-top: 50px;
//     margin-bottom: 100px;
//   }

//   .radio-div{
//     display:inline-block;
//     justify-content: space-around;
//     top: 50%;
//     font-size: 0;
//     margin-top: 50px;
//     margin-bottom: 100px;
//     padding-right: 200px;
//     background-color: #777;
//   }

//   .radioButton {
//     display:flex;
//     flex-direction: row;
//     align-items: center;
//     color: white;
//     background-color: #333;
//     padding: 5px 15px;
//     margin: 10px 0px;
//     cursor: pointer;
//     box-shadow: 0px 2px 2px lightgray;
//     gap: 1rem;
//     border-radius: 25px;
//   }

//   .radioLabel {
//     margin-left: 8px;
//     font-size: 17px;
//     color: "#333";
//   }

//   .showButton {
//     color: white;
//     background-color: #333;
//     padding: 5px 15px;
//     margin: 20px 10px;
//     cursor: pointer;
//     box-shadow: 0px 2px 2px lightgray;
//   }

//   .dropdownButton {
//     align-items: center;
//     color: white;
//     background-color: #333;
//     padding: 5px 15px;
//     margin: 10px 10px;
//     cursor: pointer;
//     box-shadow: 0px 2px 2px lightgray;
//     gap: 1rem;
//   }
// `;

export default HomePage;