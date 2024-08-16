import React from 'react'

function OperationButton({ children, onClick, className = '' }) {
  return (
    <button 
      onClick={onClick}
      className={`operation-button font-bold py-2 px-4 rounded transition-colors duration-200 ease-in-out ${className}`}
    >
      {children}
    </button>
  )
}

export default OperationButton