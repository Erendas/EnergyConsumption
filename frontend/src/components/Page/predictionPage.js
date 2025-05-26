import React, { useState } from 'react';
import './predictionPage.css';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

function PredictionPage (){
    const [selectedValue, setSelectedValue] = useState(false);
    const [selectedValue2, setSelectedValue2] = useState(false);
    // const [epochs, setEpochs] = useState(10);
    // const [batchSize, setBatchSize] = useState(8);
    const [data, setData] = useState(null);
  
    const handleRadioChange = (value) => { 
        setSelectedValue(value); 
    }; 

    const handleOptionChange = (value) => { 
        setSelectedValue2(value); 
    }; 
  
    const handleSubmit = (event) => {
      event.preventDefault();
      let url = 'http://localhost:8080/api/graphs';
      if (selectedValue == 'option1') {
          url += `/naive`;
      } else if (selectedValue == 'option2') {
          url += `/arima`;
      } else if (selectedValue == 'option3' && selectedValue2 == 'univariate') {
          url += `/cnn/univariate`;
      } else if (selectedValue == 'option3' && selectedValue2 == 'multichannel') {
          url += `/cnn/multichannel`;
      } else if (selectedValue == 'option3' && selectedValue2 == 'multiheaded') {
          url += `/cnn/multiheaded`;
      } else if (selectedValue == 'option4' && selectedValue2 == 'encoder-decoder-univariate') {
          url += `/lstm/EncoderDecoderUnivariate`;
      } else if (selectedValue == 'option4' && selectedValue2 == 'encoder-decoder-multivariate') {
          url += `/lstm/EncoderDecoderMultivariate`;
      } else if (selectedValue == 'option4' && selectedValue2 == 'cnn-lstm') {
          url += `/lstm/CnnLstm`;
      } else if (selectedValue == 'option4' && selectedValue2 == 'convlstm') {
          url += `/lstm/ConvLstm`;
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
  
    return (
      <div className="PredictionPage">
        <main>
          <div className="chart-container">
            <img src={URL.createObjectURL(new Blob([data], { type: 'text/plain' }))} />
          </div>
          <form className="control-panel" onSubmit={handleSubmit}>
            <p>Farklı algoritmaları kullanarak tahminler yap.</p>
            <div className="view-options">
              <label>
                <input
                  type="radio"
                  id="option1"
                  value="option1"
                  checked={selectedValue === "option1"}
                  onChange={() => handleRadioChange("option1")}
                />
                Naive
              </label>
              <label>
                <input
                  type="radio"
                  id="option2"
                  value="option2"
                  checked={selectedValue === "option2"}
                  onChange={() => handleRadioChange("option2")}
                />
                Arima
              </label>
              <label>
                <input
                  type="radio"
                  id="option3"
                  value="option3"
                  checked={selectedValue === "option3"}
                  onChange={() => handleRadioChange("option3")}
                />
                CNN
              </label>
              <label>
                <input
                  type="radio"
                  id="option4"
                  value="option4"
                  checked={selectedValue === "option4"}
                  onChange={() => handleRadioChange("option4")}
                />
                LSTM
              </label>
            </div>
            {selectedValue === "option1" && (
              <div className="naive">
                <button type="submit">GÖSTER</button>
              </div>
            )}
            {selectedValue === "option2" && (
              <div className="arima">
                <button type="submit">GÖSTER</button>
              </div>
            )}
            {selectedValue === "option3" && (
              <div className="CNN">
                <label>
                    <input
                    type="radio"
                    id="univariate"
                    value="univariate"
                    checked={selectedValue2 === "univariate"}
                    onChange={() => handleOptionChange("univariate")}
                    />
                    Univariate
                </label>
                <label>
                    <input
                    type="radio"
                    id="multichannel"
                    value="multichannel"
                    checked={selectedValue2 === "multichannel"}
                    onChange={() => handleOptionChange("multichannel")}
                    />
                    MultiChannel
                </label>
                <label>
                    <input
                    type="radio"
                    id="multiheaded"
                    value="multiheaded"
                    checked={selectedValue2 === "multiheaded"}
                    onChange={() => handleOptionChange("multiheaded")}
                    />
                    MultiHeaded
                </label>
                {/* <label>
                  Epochs:
                  <input
                    type="number"
                    value={epochs}
                    onChange={(e) => setEpochs(e.target.value)}
                  />
                </label>
                <label>
                  Batch Size:
                  <input
                    type="number"
                    step="8"
                    value={batchSize}
                    onChange={(e) => setBatchSize(e.target.value)}
                  />
                </label> */}
                <button type="submit">GÖSTER</button>
              </div>
            )}
            {selectedValue === "option4" && (
              <div className="LSTM">
                <label>
                    <input
                    type="radio"
                    id="encoder-decoder-univariate"
                    value="encoder-decoder-univariate"
                    checked={selectedValue2 === "encoder-decoder-univariate"}
                    onChange={() => handleOptionChange("encoder-decoder-univariate")}
                    />
                    Encoder-Decoder Univariate
                </label>
                <label>
                    <input
                    type="radio"
                    id="encoder-decoder-multivariate"
                    value="encoder-decoder-multivariate"
                    checked={selectedValue2 === "encoder-decoder-multivariate"}
                    onChange={() => handleOptionChange("encoder-decoder-multivariate")}
                    />
                    Encoder-Decoder Multivariate
                </label>
                <label>
                    <input
                    type="radio"
                    id="cnn-lstm"
                    value="cnn-lstm"
                    checked={selectedValue2 === "cnn-lstm"}
                    onChange={() => handleOptionChange("cnn-lstm")}
                    />
                    CNN-LSTM
                </label>
                <label>
                    <input
                    type="radio"
                    id="convlstm"
                    value="convlstm"
                    checked={selectedValue2 === "convlstm"}
                    onChange={() => handleOptionChange("convlstm")}
                    />
                    ConvLSTM
                </label>
                {/* <label>
                  Epochs:
                  <input
                    type="number"
                    value={epochs}
                    onChange={(e) => setEpochs(e.target.value)}
                  />
                </label>
                <label>
                  Batch Size:
                  <input
                    type="number"
                    step="8"
                    value={batchSize}
                    onChange={(e) => setBatchSize(e.target.value)}
                  />
                </label> */}
                <button type="submit">GÖSTER</button>
              </div>
            )}
          </form>
        </main>
      </div>
    );
  }

// const PredictionPage = () => {
//     const [selectedValue, setSelectedValue] = useState(false);
//     const [selectedValue2, setSelectedValue2] = useState(false);

//     const handleRadioChange = (value) => { 
//       setSelectedValue(value); 
//     }; 

//     const handleOptionChange = (value) => { 
//         setSelectedValue2(value); 
//       }; 
  
//     return (
//     <Wrapper>
//         <div className="container">
//           <div>
//             <img className="chart-image" src={b} alt={""} width="900" height="500" />
//           </div>
//           <div className="radioGroup"> 
//             <div className="radioButton"> 
//               <input 
//                   type="radio"
//                   id="option1"
//                   value="option1"
//                   checked={selectedValue === "option1"}
//                   onChange={() => handleRadioChange("option1")} 
//               /> 
//               <label htmlFor="option1" className="radioLabel"> 
//                   Naive 
//               </label> 
//             </div> 

//             <div className="radioButton"> 
//               <input 
//                   type="radio"
//                   id="option2"
//                   value="option2"
//                   checked={  selectedValue === "option2"} 
//                   onChange={() => handleRadioChange("option2")} 
//               /> 
//               <label htmlFor="option2" className="radioLabel"> 
//                   Arima 
//               </label> 
//             </div> 

//             <div className="radioButton" > 
//               <input 
//                   type="radio"
//                   id="option3"
//                   value="option3"
//                   checked={ selectedValue === "option3"} 
//                   onChange={() => handleRadioChange("option3")} 
//               /> 
//               <label htmlFor="option3" className="radioLabel"> 
//                   CNN 
//               </label> 
//             </div> 

//             <div className="radioButton" > 
//               <input 
//                   type="radio"
//                   id="option4"
//                   value="option4"
//                   checked={ selectedValue === "option4"} 
//                   onChange={() => handleRadioChange("option4")} 
//               /> 
//               <label htmlFor="option4" className="radioLabel"> 
//                   LSTM 
//               </label> 
//             </div> 
//             <div>
//                 <button className="showButton">Predict</button>
//             </div>
//           </div> 
//           {selectedValue === "option3" && (
//             <div className="radioGroup">
//                 <div className="radioButton" > 
//                     <input 
//                         type="radio"
//                         id="univariate"
//                         value="univariate"
//                         checked={ selectedValue === "univariate"} 
//                         onChange={() => handleOptionChange("univariate")} 
//                     /> 
//                     <label htmlFor="univariate" className="radioLabel"> 
//                         Univariate 
//                     </label> 
//                 </div> 
//                 <div className="radioButton" > 
//                     <input 
//                         type="radio"
//                         id="multichannel"
//                         value="multichannel"
//                         checked={ selectedValue === "multichannel"} 
//                         onChange={() => handleOptionChange("multichannel")} 
//                     /> 
//                     <label htmlFor="multichannel" className="radioLabel"> 
//                         Multi-channel 
//                     </label> 
//                 </div> 
//                 <div className="radioButton" > 
//                     <input 
//                         type="radio"
//                         id="multihead"
//                         value="multihead"
//                         checked={ selectedValue === "multihead"} 
//                         onChange={() => handleOptionChange("multihead")} 
//                     /> 
//                     <label htmlFor="multihead" className="radioLabel"> 
//                         Multi-headed 
//                     </label> 
//                 </div> 
//             </div>
//           )}
//           {selectedValue === "option4" && (
//             <div className="radioGroup">
//                 <div className="radioButton" > 
//                     <input 
//                         type="radio"
//                         id="ed-univariate"
//                         value="ed-univariate"
//                         checked={ selectedValue === "ed-univariate"} 
//                         onChange={() => handleOptionChange("ed-univariate")} 
//                     /> 
//                     <label htmlFor="ed-univariate" className="radioLabel"> 
//                         Encoder-Decoder Univariate 
//                     </label> 
//                 </div> 
//                 <div className="radioButton" > 
//                     <input 
//                         type="radio"
//                         id="ed-multivariate"
//                         value="ed-multivariate"
//                         checked={ selectedValue === "ed-multivariate"} 
//                         onChange={() => handleOptionChange("ed-multivariate")} 
//                     /> 
//                     <label htmlFor="ed-multivariate" className="radioLabel"> 
//                         Encoder-Decoder Multivariate 
//                     </label> 
//                 </div> 
//                 <div className="radioButton" > 
//                     <input 
//                         type="radio"
//                         id="cnn-lstm"
//                         value="cnn-lstm"
//                         checked={ selectedValue === "cnn-lstm"} 
//                         onChange={() => handleOptionChange("cnn-lstm")} 
//                     /> 
//                     <label htmlFor="cnn-lstm" className="radioLabel"> 
//                         CNN-LSTM
//                     </label> 
//                 </div> 
//                 <div className="radioButton" > 
//                     <input 
//                         type="radio"
//                         id="convlstm"
//                         value="convlstm"
//                         checked={ selectedValue === "convlstm"} 
//                         onChange={() => handleOptionChange("convlstm")} 
//                     /> 
//                     <label htmlFor="convlstm" className="radioLabel"> 
//                         ConvLSTM
//                     </label> 
//                 </div> 
//             </div>
//           )}
//         </div>
//     </Wrapper> 
//     )
// }

// const Wrapper = styled.div`
// margin: 20px;

// h2 {
//   margin-left: 20px;
// }

// .container {
//   display: inline-block;
//   align-items: center;
// }

// .radioGroup {
//   display:flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-around;
//   margin-top: 20px;
//   border-radius: 8px;
//   background-color: "white";
//   padding: 30px;
// }

// .radioButton {
//   display:flex;
//   flex-direction: row;
//   align-items: center;
//   color: white;
//   background-color: #333;
//   padding: 5px 15px;
//   margin: 10px 0px;
//   cursor: pointer;
//   box-shadow: 0px 2px 2px lightgray;
//   gap: 1rem;
// }

// .radioLabel {
//   margin-left: 8px;
//   font-size: 17px;
//   color: "#333";
// }

// .showButton {
//   color: white;
//   background-color: #333;
//   padding: 5px 15px;
//   margin: 10px 0px;
//   cursor: pointer;
//   box-shadow: 0px 2px 2px lightgray;
// }
// `;

export default PredictionPage;