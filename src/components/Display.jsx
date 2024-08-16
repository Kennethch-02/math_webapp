import React from 'react'

function Display({ value }) {
  return (
    <div className="bg-gray-800 text-right p-4 text-3xl text-purple-400 font-mono rounded mb-4 overflow-hidden glow-border glow-text">
      {value}
    </div>
  )
}

export default Display