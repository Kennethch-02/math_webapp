import React from 'react'

function NumberButton({ children, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="number-button font-bold py-2 px-4 rounded transition-colors duration-200 ease-in-out"
    >
      {children}
    </button>
  )
}

export default NumberButton