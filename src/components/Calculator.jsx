import React, { useState } from 'react'
import OperationButton from './OperationButton'
import NumberButton from './NumberButton'
import Display from './Display'

function Calculator() {
  const [display, setDisplay] = useState('0')
  const [operation, setOperation] = useState(null)
  const [prevValue, setPrevValue] = useState(null)

  const handleNumberClick = (number) => {
    setDisplay(prev => prev === '0' ? number : prev + number)
  }

  const handleOperationClick = (op) => {
    setOperation(op)
    setPrevValue(display)
    setDisplay('0')
  }

  const calculateResult = () => {
    const current = parseFloat(display)
    const previous = parseFloat(prevValue)
    let result

    switch(operation) {
      case '+':
        result = previous + current
        break
      case '-':
        result = previous - current
        break
      case '*':
        result = previous * current
        break
      case '/':
        result = previous / current
        break
      default:
        return
    }

    setDisplay(result.toString())
    setOperation(null)
    setPrevValue(null)
  }
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  const handlePrimeCheck = () => {
    const number = parseInt(display);
    setDisplay(isPrime(number) ? `${number} is prime` : `${number} is not prime`);
  }
  return (
    <div className="calculator p-6 rounded-lg shadow-lg border-2">
      <Display value={display} />
      <div className="grid grid-cols-4 gap-2 mt-4">
        <NumberButton onClick={() => handleNumberClick('7')}>7</NumberButton>
        <NumberButton onClick={() => handleNumberClick('8')}>8</NumberButton>
        <NumberButton onClick={() => handleNumberClick('9')}>9</NumberButton>
        <OperationButton onClick={() => handleOperationClick('/')}>/</OperationButton>
        
        <NumberButton onClick={() => handleNumberClick('4')}>4</NumberButton>
        <NumberButton onClick={() => handleNumberClick('5')}>5</NumberButton>
        <NumberButton onClick={() => handleNumberClick('6')}>6</NumberButton>
        <OperationButton onClick={() => handleOperationClick('*')}>*</OperationButton>
        
        <NumberButton onClick={() => handleNumberClick('1')}>1</NumberButton>
        <NumberButton onClick={() => handleNumberClick('2')}>2</NumberButton>
        <NumberButton onClick={() => handleNumberClick('3')}>3</NumberButton>
        <OperationButton onClick={() => handleOperationClick('-')}>-</OperationButton>
        
        <NumberButton onClick={() => handleNumberClick('0')}>0</NumberButton>
        <NumberButton onClick={() => handleNumberClick('.')}>.</NumberButton>
        <OperationButton onClick={calculateResult}>=</OperationButton>
        <OperationButton onClick={() => handleOperationClick('+')}>+</OperationButton>
        <OperationButton onClick={handlePrimeCheck} className="col-span-2">Prime?</OperationButton>
        <OperationButton onClick={() => setDisplay('0')} className="col-span-2">Clear</OperationButton>
      </div>
    </div>
  )
}

export default Calculator