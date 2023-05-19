import React from 'react';
import img from '../img/image 47.png';
import phone from '../img/photo.png';

function Section_main() {
  return (
    <div className='xl:mt-[24rem] md:mt-[4rem]  mt-2 font-pop overflow-hidden'>
        <div className='lg:my-[7rem] my-2 relative'>
        <div className='flex justify-center'>
            <img className='md:w-[20%] w-[50%]' src={img} alt="" />
            <div class="lg:h-[400px] lg:w-[400px] md:w-[200px] md:h-[200px] w-[100px] h-[100px] bg-blue2 bg-opacity-10 rounded-full absolute top-12 left-[34%] md:left-[35%] xl:left-[35%] -z-10"></div>
        </div>
        <div className='text-center md:mt-4'>
            <h1 class="md:font-light font-bold text-2xl md:text-5xl text-blue1">One Solution</h1>
            <p class="uppercase mt-2 font-semibold text-sm text-blue1 tracking-wider ">Secured & Delightful Experience</p>
        </div>
        </div>

        <div className='flex lg:flex-row flex-col justify-between items-center gap-4'>
            <div className='flex items-center'>
            <div className='lg:block hidden w-[700px] h-[670px] relative -left-[15%] rounded-full bg-blue-900 overflow-hidden z-10'>
            <div className='absolute left-[25%] transform-translate-x-1/2 bottom-0'>
                <img className='w-[370px] h-[550px]' src={phone} alt="" />
           </div>
            </div>
            <div className='hidden flex-col gap-4 lg:flex z-40 -mt-10'>
                <button className='px-16 py-2 bg-white bg-opacity-75 border-2 rounded-full border-blue-600 -ml-[220px]'>Send Links</button>
                <button className='px-12 py-2 bg-white bg-opacity-75 border-2 rounded-full border-blue-600 -ml-[190px] -mr-6'>Instant Payouts</button>
                <button className='px-10 py-2 bg-white bg-opacity-75 border-2 rounded-full border-blue-600 -ml-[160px] -mr-12'>Virtual Accounts</button>
                <button className='px-12 py-2 bg-white bg-opacity-75 border-2 rounded-full border-blue-600 -ml-[190px] -mr-6'>Smart Checkout</button>
                <button className='px-12 py-2 bg-white bg-opacity-75 border-2 rounded-full border-blue-600 -ml-[220px]'>USSD</button>
           </div>
            </div>



            <div className='lg:w-[30%] mx-6 lg:mx-0 md:mt-10 mt-5 rounded card p-2 lg:-ml-12'>
                <h1 className='md:text-4xl font-semibold text-blue1 mb-2 hidden lg:block'>Virtual <pre className='font-pop'>Accounts</pre></h1>
                <h1 className='text-2xl md:text-3xl font-semibold text-white text-center mb-2 lg:hidden bg-blue2 px-6 py-4 rounded-lg'>Virtual Accounts</h1>
                <p className='w-[90%] md:text-lg text-center leading-tighter'>Easily manage complex projects by creating separate virtual account for each project, at no extra cost</p>
            </div>
        </div>

        <div className='grid md:grid-cols-2 grid-row items-center mx-10 my-10 md:mx-20 md:my-20 md:gap-16'>
            <div className='col-span-1 text-right md:border-none px-4 border-r-4 '>
                <h1 className='md:text-5xl text-3xl text-blue1 font-semibold'>Integration</h1>
                <h3 className='uppercase md:text-blue1 text-blue-400 text-lg  py-2 font-semibold tracking-widest'>Tools and Resources</h3>
                <p className='md:text-xl'>We have taken care of all the hard work,  so you and your team can focus on integration using our easy and ready to use APIs</p>
            </div>
            <div className='bg-black mt-6 md:my-0 px-8 py-6 lg:w-[80%] lg:h-[90%] rounded-lg'>
                <div className='flex lg:gap-2 gap-1 mb-4 md:mb-0'>
                    <div className='bg-red-500 w-3 h-3 rounded-full'></div>
                    <div className='bg-yellow-500 w-3 h-3 rounded-full'></div>
                    <div className='bg-green-500 w-3 h-3 rounded-full'></div>
                </div>
                <div className='text-white'>
                    <p className='mx-4 my-2 lg:text-xl'>&#x2774;</p>
                    <div className='xl:px-16 lg:pl-8  px-6'>
                        <p className='lg:text-xl'>"amount": 10,000.00,</p>
                        <p className='lg:text-xl'>"currency": "NG",</p>
                        <p className='lg:text-xl'>"card number": "411111111",</p>
                        <p className='lg:text-xl'>"card-exp-month": "01",</p>
                        <p className='lg:text-xl'>"card-exp-year": "2024"</p>
                    </div>
                    <p className='mx-4 my-2 lg:text-xl'>&#x2775;</p>
                </div>
            </div>

        </div>
    </div>


  )
}

export default Section_main