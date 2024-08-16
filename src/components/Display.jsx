import React from 'react'

function Display({ value }) {
  return (
    <div className="display text-right p-4 text-3xl font-mono rounded mb-4 overflow-hidden">
      {value}
    </div>
  )
}

export default Display