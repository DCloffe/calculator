'use client'
import React, { useState, ReactElement } from 'react';
import  { Calculator }  from '@/utils/Calculator.util';

const CalcButton = ({ value, className, onClick }: { value: string, className?: string, onClick?: ()=> void }): ReactElement => {
  return (
    <button onClick={onClick} className={`block bg-slate-200 p-2 text-2xl border-[0.5px] drop-shadow-sm border-slate-300 rounded-md ${className}`}>{value}</button>
  );
}

const TheCalculator = (): ReactElement => {

  const [ currentValue, setCurrentValue ] = useState<string>('');
  const [ firstValue , setFirstValue ] = useState<string>('');
  const [ operation , setOperation ] = useState<string>('');

  const calculator = new Calculator();

  const handleNumber = (value: string) => {
    setCurrentValue((prev) => prev += value);
  }
  const handleClear = () => {
    setCurrentValue('');
  }

  const handleOperation = (method: string) => {
    switch (method) {
      case '+':
      case '-':
      case '/':
      case '*': {
        setFirstValue(currentValue);
        setOperation(method);
        setCurrentValue('');
        break;
      }
      case '=': {
        if (operation === '+'){
          setCurrentValue(calculator.add(parseInt(firstValue), parseInt(currentValue)).toString());
          break;
        }
        if (operation === '-'){
          setCurrentValue(calculator.subtract(parseInt(firstValue), parseInt(currentValue)).toString());
          break;
        }
        if (operation === '/'){
          setCurrentValue(calculator.divide(parseInt(firstValue), parseInt(currentValue)).toString());
          break;
        }
        if (operation === '*'){
          setCurrentValue(calculator.multiply(parseInt(firstValue), parseInt(currentValue)).toString());
          break;
        }
      }
    }
  }

  return (
    <div className='bg-slate-300 py-6 px-4 rounded-xl drop-shadow-lg max-w-80'>
      <input type='text' disabled={ true } value={currentValue} className='w-full mb-4 py-2 px-2 text-2xl border rounded-lg bg-slate-200' />

      <div className='grid grid-row-4 gap-2'>

        <div className='grid grid-cols-4 gap-2'>
          <CalcButton value="1" onClick={()=> handleNumber('1')} className='hover:bg-slate-100'/>
          <CalcButton value="2" onClick={()=> handleNumber('2')} className='hover:bg-slate-100'/>
          <CalcButton value="3" onClick={()=> handleNumber('3')} className='hover:bg-slate-100'/>
          <CalcButton value="+" onClick={()=> handleOperation('+')} className='bg-gray-400 hover:bg-gray-500 text-white'/>
        </div>
        <div className='grid grid-cols-4 gap-2'>
          <CalcButton value="4" onClick={()=> handleNumber('4')} className='hover:bg-slate-100'/>
          <CalcButton value="5" onClick={()=> handleNumber('5')} className='hover:bg-slate-100'/>
          <CalcButton value="6" onClick={()=> handleNumber('6')} className='hover:bg-slate-100'/>
          <CalcButton value="-" onClick={()=> handleOperation('-')} className='bg-gray-400 hover:bg-gray-500 text-white'/>
        </div>
        <div className='grid grid-cols-4 gap-2'>
          <CalcButton value="7" onClick={()=> handleNumber('7')} className='hover:bg-slate-100'/>
          <CalcButton value="8" onClick={()=> handleNumber('8')} className='hover:bg-slate-100'/>
          <CalcButton value="9" onClick={()=> handleNumber('9')} className='hover:bg-slate-100'/>
          <CalcButton value="/" onClick={()=> handleOperation('/')} className='bg-gray-400 hover:bg-gray-500 text-white'/>
        </div>
        <div className='grid grid-cols-4 gap-2'>
          <CalcButton value="C" onClick={()=> handleClear()} className='bg-red-600 text-white'/>
          <CalcButton value="0" onClick={()=> handleNumber('0')} className='hover:bg-slate-100'/>
          <CalcButton value="=" onClick={()=> handleOperation('=')} className='bg-green-600 text-white'/>
          <CalcButton value="*" onClick={()=> handleOperation('*')} className='bg-gray-400 hover:bg-gray-500 text-white'/>
        </div>

      </div>

    </div>
  );
};

export default TheCalculator;