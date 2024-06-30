import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { basePath } from '../next.config';

const news = [{
    topic: 'NFT Game Marketplace Development - Must Have Features',
    date: 'Fri,21 Oct 2022 13:34'
}, {
    topic: 'White Label NFT Marketplacee: The Complete Guide',
    date: 'Thu,07 Jul 2022 16:54'
}, {
    topic: 'Best NFT Games And The Complete Guide - Top 5 in 2022',
    date: 'Sun,30 Jan 2022 07:59'
}
]

const LatestNews = () => {
    return (
        <section className='bg-black w-full px-4 py-12 text-gray-300'>
            <div className='flex gap-4 xs:flex-nowrap flex-wrap'>
                <Link href='#' className='font-bold text-4xl hover:text-gray-400'>Latest NFT News</Link>
                <div className='flex'>
                    <button className='brightness-100 hover:brightness-150'>   
                        <Image
                            src={`${basePath}/assets/icon-left-arrow.svg`}
                            width={40}
                            height={40}
                            alt='left arrow'
                        />
                    </button>
                    <button className='brightness-100 hover:brightness-150'>   
                        <Image
                            src={`${basePath}/assets/icon-right-arrow.svg`}
                            width={40}
                            height={40}
                            alt='right arrow'
                        />
                    </button>
                </div>
            </div>

            <div>

            </div>
            
        </section>
    )
}

export default LatestNews;