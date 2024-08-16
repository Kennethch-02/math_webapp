import React from 'react'

function OperationButton({ children, onClick, className = '' }) {
  return (
    <button 
      onClick={onClick}
      className={`bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200 ease-in-out neon-button ${className}`}
    >
      {children}
    </button>
  )
}

export default OperationButton