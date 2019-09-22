import React, { useState } from 'react'
import axios from 'axios';

const BuyStockForm = (props) => {

  const initialFormState = {
      code: 0,
      price: 0,
      volume: 0,
      totalAmount: 0
  }

  const [transaction , setTransaction] = useState(initialFormState);

  const onChangeHandler = (e) => {
    console.log(e.target.name)
    const { name, value } = e.target;
    setTransaction((data) => ({...data, [name]: value}))
  }

  const buyStock = () => {
    const sendData = {
      code: transaction.code,
      price: transaction.price,
      volume: transaction.volume
    }
    axios.post('http://localhost:9999/stock', sendData)
      .then(res => console.log(res.data));
      setTransaction(initialFormState);
  }

  return (
    <div>
    <h5> Buy Stock </h5>

    <table className="table">
    <tbody>
      <tr>
        <td>
          <label> Stock Name </label>
        </td>
        <td>
          <input type="text" name="code" value={transaction.code} onChange={onChangeHandler} />
        </td>
      </tr>
      <tr>
        <td>
          <label> Price </label>
        </td>
        <td>
          <input type="number" name="price" value={transaction.price} onChange={onChangeHandler} />
        </td>
      </tr>
      <tr>
        <td>
          <label> Volume </label>
        </td>
        <td>
          <input type="number" name="volume" value={transaction.volume} onChange={onChangeHandler} />
        </td>
      </tr>
      <tr>
        <td>
          <label> Total Amount </label>
        </td>
        <td>
          {transaction.totalAmount}
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td>
          <input type="button" className="btn btn-primary" value="Buy" onClick={buyStock} />
        </td>
      </tr>
    </tbody>
    </table>
     </div>
  )

}

export default BuyStockForm
