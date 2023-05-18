import React from 'react';
import logo from '../img/logo.png';


function Cards() {
  return (
       <div className='grid grid-cols-6 gap-4 w-full'>
        <div className='col-span-4 bg-red-950'>
            <div>
                <h1>Hello world</h1>
            </div>
        </div>
        <div className="col-span-1 bg-green-950">
        <div>
                <h1>Hello world</h1>
            </div>
        </div>
        <div className="col-span-1 bg-blue-950">
        <div>
                <h1>Hello world</h1>
            </div>
        </div>
       </div>
  )
}

export default Cards