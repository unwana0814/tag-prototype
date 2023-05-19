import React from 'react';
import logo from '../img/logo.png';
import {Link} from 'react-router-dom';
import {Facebook, Twitter, WhatsApp, Instagram, YouTube} from '@mui/icons-material';

function Footer() {
  return (
    <div className='font-pop '>
        <div className='flex justify-center relative pt-4'>
        <img className='lg:w-10 lg:h-10 w-16 h-16' src={logo} alt="" />
            <div class="lg:h-[150px] lg:w-[150px] w-[100px] h-[100px] bg-gradient-to-b from-blue-200 to-white rounded-full absolute left-[40%] lg:-bottom-[3.8rem] -bottom-[2.5rem] md:left-[45%] -z-10"></div>
        </div>

        <div className='bg-gradient-to-b from-white to-blue-200'>
        <div className='flex md:flex-row text-center md:text-left flex-col text-blue1 md:mx-10 lg:m-20 m-16 lg:gap-16 md:gap-8 gap-4 justify-center '>
            <div className=''>
                <div>
                    <h3 className='uppercase font-bold text-lg pb-4'>Contact Address</h3>
                    <p className='py-4 cursor-pointer'>200c Muri Okunola Street
                    <pre className='font-pop py-4'>Victoria Island, Lagos.</pre>
                    </p>

                    <h3 className='uppercase font-bold text-lg'>Customer Carelines</h3>
                    <p className='py-4 cursor-pointer'>+(234) 902 516 5952
                    <pre className='font-pop py-4'>+(234) 814 751 2594</pre>
                    </p>

                </div>
            </div>

            <div className=''>
                <div>
                    <h3 className='uppercase font-bold text-lg pb-4'>Company</h3>
                    <p className='py-4 cursor-pointer'>About us</p>
                    <p className='py-2 cursor-pointer'>Our Team</p>
                    <p className='py-2 cursor-pointer'>Press Room</p>
                    <p className='py-2 cursor-pointer'>Certificates & Awards</p>
                    <p className='py-2 cursor-pointer'>Careers</p>
                </div>
            </div>

            <div className=''>
                <div>
                    <h3 className='uppercase font-bold text-lg pb-4'>Developers</h3>
                    <p className='py-2 cursor-pointer'>APIs</p>
                    <p className='py-2 cursor-pointer'>Libraries</p>
                    <p className='py-2 cursor-pointer'>Plugins</p>
                    <p className='py-2 cursor-pointer'>Docs</p>
                </div>
            </div>

            <div className=''>
                <div>
                    <h3 className='uppercase font-bold text-lg pb-4'>Resources</h3>
                    <p className='py-2 cursor-pointer'>Blog</p>
                    <p className='py-2 cursor-pointer'>How to Commerce</p>
                    <p className='py-2 cursor-pointer'>Product Resources</p>
                    <p className='py-2 cursor-pointer'>Commerce Glossary</p>
                    <p className='py-2 cursor-pointer'>Revenue Calculator</p>
                    <p className='py-2 cursor-pointer'>Start an eCommerce</p>
                    <p className='py-2 cursor-pointer'>Business Guide</p>
                </div>
            </div>

            <div className=''>
                <div >
                    <h3 className='uppercase font-bold text-lg pb-4'>Legal</h3>
                    <p className='py-2 cursor-pointer'>Terms and Condition</p>
                    <p className='py-2 cursor-pointer'>Privacy Policy</p>
                    <p className='py-2 cursor-pointer'>Cookies Policy</p>
                    <p className='py-2 cursor-pointer'>Merchant Service Agreement</p>
                    <p className='py-2 cursor-pointer'>ISO Policy</p>
                </div>
            </div>

        </div>
            <div className='flex md:flex-row items-center flex-col lg:mx-20 lg:pb-4'>
                <div className='flex-1'>
                    <ul className='flex justify-start gap-4 pb-3 lg:p-0 flex-wrap text-blue1'>
                        <li className='hover:font-semibold underline cursor-pointer'>Seek Help</li>
                        <li className='hover:font-semibold underline cursor-pointer'>Privacy</li>
                        <li className='hover:font-semibold underline cursor-pointer'>Currency</li>
                        <li className='hover:font-semibold underline cursor-pointer'>Distribution</li>
                        <li className='hover:font-semibold underline cursor-pointer'>unwana@gmail.com</li>
                    </ul>
                </div>
                <div className='flex gap-4 pb-2 lg:p-0 '>
                    <Link to=''>
                        <Facebook className='text-blue1 rounded-full hover:scale-110 transition-transform duration-200 ease-in' />
                    </Link>
                    <Link to=''>
                        <Twitter className='text-blue1 hover:scale-110 transition-transform duration-200 ease-in' />
                    </Link>
                    <Link to=''>
                        <WhatsApp className='text-blue1 hover:scale-110 transition-transform duration-200 ease-in' />
                    </Link>
                    <Link to=''>
                        <YouTube className='text-blue1 hover:scale-110 transition-transform duration-200 ease-in' />
                    </Link>
                    <Link to=''>
                        <Instagram className='text-blue1 hover:scale-110 transition-transform duration-200 ease-in' />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer