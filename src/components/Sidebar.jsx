import React from 'react';

import logo from '../img/logo.png';
import beauty from '../img/beauty.jpg'
import line from '../img/line.png';
import phone from '../img/phone.png';
import {Link} from 'react-router-dom';


function Sidebar() {
  return (
    <div className='w-[87%] relative font-pop hidden lg:block'>
        {/* Sidebar */}
        <div className='font-pop bg-white'>
            <div className='hidden md:grid md:grid-cols-12 md:mx-32 shadow-2xl rounded-lg bg-gray-300'>
            <div className='col-span-3 bg-white rounded-lg items-center border-gray-300 border-solid border-r-2'>
            <Link className='flex gap-x-1 items-center bg-white justify-center my-6'>
                <img className='w-[15%]' src={logo} alt="" />
                <p className='text-blue1 font-semibold'>alliancepay</p>
            </Link>
            <div className='mt-20'>
            <div>
                <ul className="mx-4">
                    <li className='flex gap-x-4 my-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                        <Link className='text-sm'  to="">Overview</Link>
                    </li>
                    <li className='flex gap-4 mb-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                        <Link className='text-sm' to="">Businesses</Link>
                    </li>
                    <li className='flex gap-4 mb-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>

                        <Link className='text-sm' to="">Transaction</Link>
                    </li>
                    <li className='flex gap-4 mb-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>

                        <Link className='text-sm' to="">Accounts</Link>
                    </li>
                    <li className='flex gap-4 mb-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                        <Link className='text-sm' to="">Settlements</Link>
                    </li>
                    <li className='flex gap-4 mb-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                    </svg>
                        <Link className='text-sm' to="">Wallets</Link>
                    </li>
                    <li className='flex gap-4 mb-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                    </svg>

                        <Link className='text-sm' to="">Chargeback</Link>
                    </li>
                    <li className='flex gap-4 mb-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
                    </svg>

                        <Link className='text-sm' to="">Refund</Link>
                    </li>
                    <li className='flex gap-4 mb-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                        <Link className='text-sm' to="">Fraud & Risks</Link>
                    </li>
                    <li className='flex gap-4 mb-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                        <Link className='text-sm' to="">Fee & Limits</Link>
                    </li>
                    <li className='flex gap-4 mb-8'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                        <Link className='text-sm' to="">Settings</Link>
                    </li>
                    <li className='flex gap-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>

                        <Link className='text-sm' to="">Sign Out</Link>
                    </li>
                </ul>
            </div>
            </div>
        </div>

        <div className='col-span-9'>
            <div className='flex justify-between items-center bg-white w-full'>
                <div>
                    <h2 className='p-4 uppercase text-gray-700'>Overview</h2>
                </div>

                <div className='flex items-center justify-end gap-x-2'>
                    <div className='flex items-center bg-gray-300 p-2'>
                        <p>Currency</p>
                        <select className='bg-gray-300'>
                        <option value=""></option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                        </select>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                    </div>

                    <img src={beauty} className='w-[7%] h-[7%] rounded-full' alt="" />
                    </div>

            </div>
            {/* Hello Unwana */}
                <div className='bg-blue1 mx-3 mt-8 mb-5 p-4'>
                    <h3 className='text-lg text-white font-semi-bold'>Hello, Unwana!</h3>
                    <p className='text-sm text-white'>Welcome back to Alliance Pay</p>
                </div>

                <div className='grid grid-cols-12 mx-3'>
                    <div className='col-span-4'>
                        <div className='card px-5 py-4 my-2'>
                            <p className='flex'> <svg className='w-[5  %]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                </svg>
                                <span className='text-xs font-semibold'>Total transaction balance</span> </p>
                            <hr className='my-3' />
                            <p className='text-sm mb-1'>NGN <span className='text-base font-bold'>1,268,886</span>.00</p>
                            <p className='text-xs'>from last week</p>
                        </div>
                        <div className='card px-5 py-4 mb-2'>
                            <p className='text-xs font-semibold '>Total transaction balance</p>
                            <hr className='my-3' />
                            <p className='text-sm mb-1'>NGN <span className='text-base font-bold'>1,268,886</span>.00</p>
                            <p className='text-xs'>from last week</p>
                        </div>
                        <div className='card px-5 py-4'>
                            <p className='text-xs font-semibold '>Total transaction balance</p>
                            <hr className='my-3' />
                            <p className='text-sm mb-1'>NGN <span className='text-base font-bold'>1,268,886</span>.00</p>
                            <p className='text-xs'>from last week</p>
                        </div>
                    </div>
                    <div className='col-span-8'></div>

                </div>

                <div className='grid grid-cols-12 mx-3 mt-4 gap-x-2'>
                      <div className='col-span-6 card my-auto px-3 py-2'>
                    <p className='text-sm  '>What devices do customers use the most?</p>
                    <hr className='my-3' />
                </div>
                <div className='col-span-6 card px-3 py-2'>
                    <p className='text-sm'>When do I get paid the most?</p>
                    <hr className='my-2' />
                </div>
                </div>
        </div>
            </div>

            <div className='absolute top-12 -right-[6.1rem] z-10'>
                <img className='w-[300px] h-[620px] rounded-2xl border-8 border-black' src={phone} alt="" />
            </div>

    </div>

    <div className='xl:flex absolute hidden'>
        <div className='text-center'>
            <img className='ml-24' src={line} alt="" />
            <h3 class="text-blue1 w-52 text-lg pb-2 font-semibold">Reliable</h3>
            <p class="text-blue1 text-base w-52">With our many payment channels you are guaranteed a successful transaction</p>
        </div>

        <div className='text-center mx-60'>
            <img className='ml-24' src={line} alt="" />
            <h3 class="text-blue1 w-52 text-lg pb-2 font-semibold">24/7 Support</h3>
            <p class="text-blue1 text-base w-52">With our many payment channels you are guaranteed a successful transaction</p>
        </div>

        <div className='text-center md:ml-10 '>
            <img className='ml-20 -z-10' src={line} alt="" />
            <h3 class="text-blue1 w-52 text-lg pb-2 font-semibold">Seamless</h3>
            <p class="text-blue1 text-base w-52">With our many payment channels you are guaranteed a successful transaction</p>
        </div>
        </div>
        <div className='circle absolute overflow-hidden bg-blue-200 top-20 -right-[65%]'></div>
    </div>
  )
}

export default Sidebar