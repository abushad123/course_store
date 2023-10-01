import { useState } from 'react'
import Course from './components/Course';
import { Db } from './components/Db';
import { PiCurrencyInr, PiCurrencyGbp } from 'react-icons/pi';
import { BiDollar } from 'react-icons/bi';


function App() {
const [currency, setCurrency] = useState("INR");        
const [fxRate, setFxRate] = useState("1");        

const hancleInr = () => {
  setCurrency("INR");
  setFxRate(1);
}

const hancleUsd = () => {
  setCurrency("USD");
  setFxRate(80);
}

const hancleGbp = () => {
  setCurrency("GBP");
  setFxRate(150);
}

  return (
    <>
    <div className='flex flex-col justify-center'>
      <div className='flex justify-center mt-5'>
          <div className="inline-flex rounded-md shadow-sm border-2 border border-black-500" role="group">
          <button type="button" onClick={hancleInr} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-dark focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-dark dark:hover:text-dark dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            <PiCurrencyInr />INR
          </button>
          <button type="button" onClick={hancleUsd} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-dark focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-dark dark:hover:text-dark dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            <BiDollar/>USD
          </button>
          <button type="button" onClick={hancleGbp} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-dark focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-dark dark:hover:text-dark dark:hover:bg-gray-700 dark:focus:bg-gray-700">
          <PiCurrencyGbp/>GBP
          </button>
        </div>
      </div>
        <div className='flex flex-col mt-5'>
              <div className='flex justify-center text-3xl font-bold'>
                <h1>Cources</h1>
              </div>
              <div className='flex justify-center text-1xl font-medium'>
                Become a web developer
              </div>
              <div className='flex justify-center text-1xl font-normal mt-5'>
            <p className='w-1/2 text-center'> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              </div>
        </div>
      <div className='flex  justify-center item-center mt-20 '>
        <div className='flex w-1/2 flex-wrap'>
        {Db.map((item) => (<Course key={item.id} data={item} currency={currency} fxRate={fxRate} />))}

        </div>
      </div>
    </div>
    </>
  )
}

export default App
