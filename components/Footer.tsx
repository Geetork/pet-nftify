import React from 'react';
import { Button } from './index';
import Link from 'next/link';

const Footer = () => {
  return (
    <section className='flex flex-wrap pt-16 pb-4 px-4 bg-gray-910 justify-between w-full text-gray-500 font-light'>
        <section className='flex flex-wrap bg-gray-910 justify-between w-full gap-4 text-md pb-10'>
            <form action="" className='flex flex-col gap-2'>
                <h1 className='text-gray-300 font-bold text-xl'>Join our weekly digest!</h1>
                <p>Get exclusive promotions & updates straight to your inbox.</p>

                <div className='flex gap-4 pb-6'>
                    <input type="email" name="email" id="email" className='text-sm h-[44px] rounded-lg bg-transparent text-center border-[1px] border-gray-600 focus:outline-none w-full' placeholder='Enter your email'/>
                    <Button 
                        type='tertiary'
                        name='Subscribe'
                    />
                </div>
                <Button 
                    type='primary'
                    name='Create FREE Store'
                    className='w-fit h-fit'
                    />
            </form>

            <div className='grid grid-cols-2 gap-4 sm:grid-cols-4 sm:max-w-[60%] w-full text-nowrap'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-gray-300 font-bold text-md'>FEATURES</h1>
                    <ul className='flex flex-col gap-2'>
                        <li className=''><Link href='/features/build-nft-store'>Build Store</Link></li>
                        <li className=''><Link href='/features/sell-nft'>Sell NFT</Link></li>
                        <li className=''><Link href='/features/grow-nft-business'>Grow Business</Link></li>
                    </ul>
                </div>

                <div className='flex flex-col gap-2'>
                    <h1 className='text-gray-300 font-bold text-md'>SERVICES</h1>
                    <ul className='flex flex-col gap-2'>
                        <li className=''><Link href='/features/build-nft-store'>Concierge</Link></li>
                        <li className=''><Link href='/features/sell-nft'>Customization</Link></li>
                    </ul>
                </div>

                <div className='flex flex-col gap-2'>
                    <h1 className='text-gray-300 font-bold text-md'>PRODUCT</h1>
                    <ul className='flex flex-col gap-2'>
                        <li className=''><Link href='/features/build-nft-store'>About Us</Link></li>
                        <li className=''><Link href='/features/sell-nft'>Whitepaper</Link></li>
                        <li className=''><Link href='/features/grow-nft-business'>$Nl Token</Link></li>
                        <li className=''><Link href='/features/grow-nft-business'>Stake $Nl</Link></li>
                    </ul>
                </div>

                <div className='flex flex-col gap-2'>
                    <h1 className='text-gray-300 font-bold text-md'>RESOURSES</h1>
                    <ul className='flex flex-col gap-2'>
                        <li className=''><Link href='/features/build-nft-store'>Help Center</Link></li>
                        <li className=''><Link href='/features/sell-nft'>NFTify Branding</Link></li>
                        <li className=''><Link href='/features/grow-nft-business'>Success Stories</Link></li>
                        <li className=''><Link href='/features/grow-nft-business'>Video Turorials</Link></li>
                        <li className=''><Link href='/features/grow-nft-business'>Blog</Link></li>
                        <li className=''><Link href='/features/grow-nft-business'>Contact Support</Link></li>
                    </ul>
                </div>
            </div>
        </section>

        <hr className='h-[1px] w-full bg-gray-600 border-0'/>
        
        <section className='flex flex-col gap-2 text-gray-500 pt-8'>
            <h1 className='text-gray-400 text-lg font-bold'>The Leading No-code NFT Markeplace Solution</h1>
            
            <div className='flex gap-4'>
                <Link href='#'>Terms of Service</Link>
                <span className="after:content-['|']"></span>
                <Link href='#'>Privacy Policy</Link>
            </div>

            <small>&copy; Copyright NFRIfy Network. All Rights Reserved.</small>
        </section>
    </section>
  )
}

export default Footer;