import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { basePath } from '../next.config';
import { Button } from './index'

const news = [{
    title: 'NFT Game Marketplace Development - Must Have Features',
    date: 'Fri,21 Oct 2022 13:34'
}, {
    title: 'White Label NFT Marketplacee: The Complete Guide',
    date: 'Thu,07 Jul 2022 16:54'
}, {
    title: 'Best NFT Games And The Complete Guide - Top 5 in 2022',
    date: 'Sun,30 Jan 2022 07:59'
}, {
    title: 'Best NFT Games And The Complete Guide - Top 5 in 2022',
    date: 'Sun,30 Jan 2022 07:59'
}
]

interface IPost {
    post: {
        date: string,
        title: string,
    }
}

const PostCard: React.FC<IPost> = ({ post }) => {
    return (
        <Link href="#" className='group flex flex-col border-[1px] border-gray-800 rounded-lg p-6 gap-4 hover:bg-[#0400ff] text-gray-400 text-sm snap-always snap-center xs:w-[325px] w-[280px]'>
            <data className='flex justify-end'>{post.date}</data>
            <h1 className='text-gray-200 text-lg leading-5 font-bold'>{post.title}</h1>
            <div className='flex justify-end'>
                <Button
                    type='tertiary'
                    name='MORE'
                    className='before:content-["→"] before:text-2xl before:-translate-y-[3px] before:-translate-x-[2px] flex items-center gap-3 rounded-3xl bg-transparent group-hover:bg-[#2d29ff] group-hover:before:translate-x-[3px] font-light before:transition-all'
                />
            </div>
        </Link>
    )
}

const LatestNews = () => {
    return (
        <section className='flex flex-col gap-14 bg-black w-full px-4 py-12 text-gray-300'>
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

            <div className='no-scrollbar snap-x snap-mandatory overflow-x-auto'>
                <div className='w-fit flex gap-4'>
                    {
                        news.map((post, id) => (
                            <PostCard key={id} post={post}/>
                        ))
                    }
                </div>
            </div>
            
        </section>
    )
}

export default LatestNews;