import React from 'react';
import mask from '../img/Mask group.png'

function Main() {
  return (
    <div className='bg-gradient-to-b from-blue-200 to-white font-pop relative overflow-hidden z-10 transition  hover:-translate-y-1 hover:scale-105 ease-in-out duration-300 delay-150'>
        <div className='text-center lg:pt-20 overflow-hidden'>
            <h1 className='md:text-6xl text-3xl font-semibold text-blue1 pt-24 pb-4'>Payment Simplified.</h1>
            <p className='text-blue1 text-base md:text-xl'>Alliancepay is your trusted partner <br />
                for secure and convenient payment solutions</p>
                <p className='text-blue2 text-sm font-bold py-6'>Trusted by thousands of businesses in Africa</p>
                <button class="uppercase btn bg-blue1 text-sm md:mr-2 my-2 transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-105 hover:bg-blue-900 duration-300">
                  Create Free Account
                </button>
                {/* <button className='uppercase btn bg-blue1 text-sm md:mr-2 my-2'>Create Free Account</button> */}
                <button className='uppercase btn bg-blue2 text-sm ml-2 mb-2 uppercase btn text-sm md:mr-2 my-2 transition ease-in-out delay-150  hover:-translate-y-2  hover:scale-105 hover:bg-blue-500 duration-300 ...'>Try it Out (Demo)</button>
        </div>
        <div className='circle bg-white top-12'></div>
        <div className='circleb top-28 bg-blue-200'></div>

        <div className='md:mx-40 mx-4 md:my-6 grid lg:grid-cols-2 grid-rows items-center gap-x-10'>
            <div className='grid-cols-1'>
                <h1 className='md:text-5xl text-4xl text-blue1 pt-10 pb-2'>One Platform</h1>
                <p className='text-blue1 uppercase font-semibold text-sm tracking-widest my-4'>Endless payment possibilities</p>
                <p className='text-blue1 text-lg text-justify py-3 tracking-widest'>Alliancepay payment platform is designed primarily with the intent of simplifing online and offline payment with all following payment method:</p>

                <div className='my-4 flex flex-col md:flex-row'>
                  <div className='mr-7'>
                  <div className='flex gap-1 mb-2 text-blue1'>
                    <svg className='w-[7%]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <p className='text-lg'>Cards</p>
                  </div>

                  <div className='flex gap-1 text-blue1 mb-2'>
                    <svg className='w-[7%]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <p className='text-lg'>Bank Account</p>
                    </div>

                    <div className='flex gap-1 text-blue1'>
                    <svg className='w-[7%]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <p className='text-lg'>Bank Transfer</p>
                  </div>

                  </div>

                  <div className='mr-7'>
                  <div className='flex gap-1 mb-2 text-blue1'>
                    <svg className='w-[7%]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <p className='text-lg'>USSD</p>
                  </div>

                  <div className='flex gap-1 text-blue1 mb-2'>
                    <svg className='w-[7%]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <p className='text-lg'>Apple Pay</p>
                    </div>

                    <div className='flex gap-1 text-blue1'>
                    <svg className='w-[7%]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <p className='text-lg'>Visa QR</p>
                  </div>

                  </div>

                  <div>
                  <div className='flex gap-1 mb-2 text-blue1'>
                    <svg className='w-[7%]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <p className='text-lg'>Mobile Money</p>
                  </div>

                  <div className='flex gap-1 text-blue1 mb-2'>
                    <svg className='w-[7%]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <p className='text-lg'>POS</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className='lg:grid lg:grid-cols-1 hidden'>
              <img className='w-[900px]' src={mask} alt="" />
            </div>
        </div>
    </div>

  )
}

export default Main