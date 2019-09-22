import React, { Component, useState , useEffect } from 'react';

const Calculator = props => {

    const initialFormState = {
        buyPrice:'',
        buyVolume:'',
        sellPrice:'',
        sellVolume:'',
        totalBuy:'',
        totalSell:'',
        totalEarning:'',
        returnEarning:''
    }

    const [stock, setStock] = useState(initialFormState)

    useEffect(()=>{
        console.log('run!!!!',stock)
        return ()=>{
        }
    },[])

    const handleInputChange = event => {

      const { name, value } = event.target;
      console.log(stock)
      setStock((data) => ({...data, [name]: Number(value)}));
    }

    const calculateProfit = () => {

      console.log(stock);
      let totalBuy = stock.buyPrice * stock.buyVolume;
      let totalSell = stock.sellPrice * stock.sellVolume;
      let totalEarning = totalSell - totalBuy;
      let returnEarning =  ( totalSell - totalBuy / totalBuy) / 100;
      returnEarning = returnEarning.toFixed(1);
      setStock( (data) => ({...data, 'totalBuy': totalBuy  }) )
      setStock( (data) => ({...data, 'totalSell': totalSell  }) )
      setStock( (data) => ({...data, 'totalEarning': totalEarning  }) )
      setStock( (data) => ({...data, 'returnEarning': returnEarning  }) )
    }

    const styleN = {
      fontSize: "90pt",
      backgroundColor: "#4D8FAC",
      padding: "30px",
      color: "white",
      fontFamily: "Arial"
    };

    const flexContainer = {
      fontSize: "90pt",
      display: 'flex',
      flexWrap: 'wrap',
    }

    const flexContainerDiv1 = {
      backgroundColor: '#6B9362',
      width: '45%',
      margin: '0px',
      textAlign: 'center',
      lineHeight: '75px',
      minHeight: '90pt',
      paddingTop: '10pt'
    }

    const flexContainerDiv2 = {
      backgroundColor: '#817B69',
      width: '45%',
      margin: '0px',
      textAlign: 'center',
      lineHeight: '75px',
      minHeight: '90pt',
      paddingTop: '10pt'
    }


    return(
        <div>
          <h2 className="display-4 font-weight-normal">Calculator of Share Profit</h2>
          <div style={flexContainer}>
            <div style={flexContainerDiv1}>{stock.totalEarning} </div>
            <div style={flexContainerDiv2}>{stock.returnEarning} %</div>
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <input type="Number" name="buyPrice" className="form-control" placeholder="ex: 1" value={stock.buyPrice} onChange ={handleInputChange}/>
                </td>
                <td>
                  <input type="Number" name="sellPrice" className="form-control" placeholder="ex: 1.5" value={stock.sellPrice} onChange ={handleInputChange} />

                </td>
              </tr>
              <tr>
                <td>
                <input type="Number" name="buyVolume" className="form-control" placeholder="ex: 1000" value={stock.buyVolume} onChange ={handleInputChange} />

                </td>
                <td>
                <input type="Number" name="sellVolume" className="form-control" placeholder="ex: 1000" value={stock.sellVolume} onChange ={handleInputChange} />
                </td>
              </tr>
              <tr>
                <td>
                  {stock.totalBuy}
                </td>
                <td>
                  {stock.totalSell}
                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>
                  {stock.totalEarning}
                </td>
              </tr>
              <tr>
                <td>
                  <label>Profit</label>
                </td>
                <td>
                  <input type="button" className="btn btn-primary" onClick ={calculateProfit} value="Calculate"/>
                </td>
              </tr>
            </tbody>
            </table>
        </div>
      )
}

export default Calculator
