import React, {useEffect} from "react";
import {Link } from 'react-router-dom';

const Header = (props) => {

  useEffect(() => {
 //Javascript to toggle the menu
		document.getElementById('nav-toggle').onclick = function(){
			document.getElementById("nav-content").classList.toggle("hidden");
		}
  },[]);
 
  return (
    <div className="">
      <nav className='flex items-center justify-between flex-wrap shadow-lg bg-gray-800 p-3 fixed  w-full  z-10 top-0 '>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
          <Link
            className='text-white no-underline hover:text-white hover:no-underline'
            to='/'>
            <span className=' text-xl lg:text-2xl pl-2'>
              <i className='em em-grinning'>Calculadora Hipoteca </i>
            </span>
          </Link>
        </div>

        <div className='block lg:hidden'>
          <button
            id='nav-toggle'
            className='flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white'>
            <svg
              className='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>

        <div
          className='w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0'
          id='nav-content'>
          <ul className='list-reset lg:flex lg:justify-end flex-1 items-center'>
                  <li className='mr-3'>
              <Link
                className='inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4'
                to='/'>
                Calculator
              </Link>
            </li>
            <li className='mr-3'>
               <Link
                className='inline-block text-gray-600 py-2 px-4 text-white no-underline'
               to='/project'>
                  The Project
              </Link>
            </li>
            <li className='mr-3'>
              <Link
                className='inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4'
                to='/'>
                Portafolio
              </Link>
            </li>

          </ul>
        </div>
      </nav>

      <div className='container  mx-auto  mt-20 md:mt-12 '></div>


    </div>
  );
};

export default Header;
