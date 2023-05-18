import React from 'react';
import logo from '../img/logo.png';

import {Link} from 'react-router-dom';


function NavBar() {
  return (
    <div className='font-pop'>
        <div className='flex items-center xl:bg-white bg-gray-100 px-8 py-6'>
            <Link className='flex gap-x-1 items-center flex-1'>
                <img className='xl:w-[12%] lg:w-[10%] hidden lg:block' src={logo} alt="" />
                <p className='md:text-blue1 text-2xl lg:font-semibold  '>alliancepay <pre className='text-blue2 font-pop leading-tight text-xs tracking-tight'>The Future of Payments</pre></p>
            </Link>

            {/* animate-bounce duration-300 */}
            <div className='xl:hidden block bg-gray-500 p-2 rounded-full text-white shadow-lg hover:bg-blue2'>
            <svg className='w-[10%]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
            </svg>

            </div>
            <div className='xl:mr-8  xl:block'>
                <ul className="xl:flex hidden text-blue1">
                    <li className='lg:pr-4 pl-4 text-lg cursor-pointer hover:scale-75 transition-transform duration-200 ease-in'>
                        <Link to="">Demo</Link>
                    </li>
                    <li className='px-4 text-lg cursor-pointer hover:scale-75 transition-transform duration-200 ease-in'>
                        <Link to="">Pricing</Link>
                    </li>
                    <li className='px-4 text-lg cursor-pointer hover:scale-75 transition-transform duration-200 ease-in'>
                        <Link to="">FAQs</Link>
                    </li>
                    <li className='px-4 text-lg cursor-pointer hover:scale-75 transition-transform duration-200 ease-in'>
                        <Link to="">Company</Link>
                    </li>
                    <li className='px-4 text-lg cursor-pointer hover:scale-75 transition-transform duration-200 ease-in'>
                        <Link to="">Documentation</Link>
                    </li>
                    <li className='pl-4 text-lg cursor-pointer hover:scale-75 transition-transform duration-200 ease-in'>
                        <Link to="">Contact Us</Link>
                    </li>
                </ul>
            </div>

            <div className='lg:flex lg:ml-16 hidden '>
                <button className='pr-4 text-blue1 text-lg cursor-pointer font-semibold hover:animate-pulse'>Login</button>
                <button className='signup bg-blue2 hover:scale-75 transition-transform duration-200 ease-in'>Sign Up</button>
            </div>

        </div>
        <hr className='border-2 border-white' />
    </div>
  )
}

export default NavBar