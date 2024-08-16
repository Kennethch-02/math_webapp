import React from 'react'
import Calculator from './components/Calculator'
import { ThemeProvider, useTheme } from './components/ThemeContext'
import ThemeSelector from './ThemeSelector'

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${theme}`}>
      <ThemeSelector />
      <Calculator />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App