import Calculator from '@/components/Calculator';
import React, { ReactElement } from 'react';

const HomePage = (): ReactElement => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-200 p-2'>
      <Calculator />
    </div>
  );
};

export default HomePage;