import React from 'react';
import { Button } from './index';

const Refer = () => {
    return (
        <section className='flex items-center flex-col w-full bg-gradient-to-t from-black via-pink-1000 to-black p-4 py-20 s sm:gap-6 gap-12'>
            <h1 className='text-gray-200 sm:text-4xl text-center font-bold text-xl'>Start your journey in<br/>the NFT space</h1>
            <div className='flex flex-wrap gap-4 w-[70%] xs:w-auto'>
                <Button name='Create FREE store' type='primary' className='xs:w-fit w-full'/>
                <Button name='Explore our community' type='secondary' className="flex  items-center gap-2 xs:after:content-['→'] xs:after:text-3xl xs:after:-translate-y-0.5 xs:w-fit w-full"/>
            </div>
        </section>
    )
}

export default Refer;