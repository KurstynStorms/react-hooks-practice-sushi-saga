import React, { useState } from "react"

const SushiWallet = ({onAddMoney}) => {
  const [value, setValue] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    onAddMoney(value)
    setValue(0)
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10)
    setValue(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={value} onChange={handleChange} />
      <button type="submit">Add $ to Budget</button>
    </form>
  )
}

export default SushiWallet