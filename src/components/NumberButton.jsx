import React from 'react'

function NumberButton({ children, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="bg-gray-700 hover:bg-gray-600 text-purple-300 font-bold py-2 px-4 rounded transition-colors duration-200 ease-in-out neon-button"
    >
      {children}
    </button>
  )
}

export default NumberButton