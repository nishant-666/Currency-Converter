import React from 'react'
import { Input } from 'semantic-ui-react'

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props
  return (
    <div className="currency">
      <Input placeholder='Enter the Currency to Convert' value={amount} onChange={onChangeAmount} />
      
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
