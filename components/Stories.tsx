import React from 'react';
import Image from 'next/image';
import { basePath } from '../next.config';

const Stories = () => {
    return (
        <section className='flex flex-col gap-6 bg-black text-gray-300 font-bold p-4'>
            <h1 className='xs:text-4xl text-3xl leading-snug'>Hear it from<br/>thriving NFT entrepreneurs</h1>
            <h2 className='w-fit text-transparent text-xl bg-gradient-purple bg-clip-text'>More stories</h2>

            <div className='flex flex-col gap-10 text-lg'>
                <article className='flex md:flex-row flex-col gap-10'>
                    <div className='flex-1 relative w-full h-0 md:pb-[30%] pb-[60%] brightness-110 hover:brightness-95 cursor-pointer'>
                        <Image
                            src={`${basePath}/assets/luke-3e08d4947a7ee3e7d2777d0eed5b2d8c.webp`}
                            alt='article image'
                            layout='fill'
                            objectFit='contain'
                        />
                    </div> 

                    <figure className='flex-1 flex-col gap-4'>
                        <blockquote>
                            <q>
                            We were having a lot of trouble finding an NFT Marketplace that offered all of the features we needed. We were lucky NFTify had been working hard to offer one of the wides feature offerings I’d seen.
                            </q>
                        </blockquote>
                        <figcaption>&mdash; Luke Layden, Strategic DESK Lead at CoinDesk</figcaption>
                    </figure>
                    
                </article>

                <article className='flex md:flex-row flex-col gap-10'>
                    <div className='flex-1 order-2 relative w-full h-0 md:pb-[30%] pb-[60%] brightness-110 hover:brightness-95 cursor-pointer'>
                        <Image
                            src={`${basePath}/assets/majiano-5a5e46e17313bb1b10f40b541cc69fb5.webp`}
                            alt='article image'
                            layout='fill'
                            objectFit='contain'
                        />
                    </div> 

                    <figure className='flex-1 order-1 flex-col gap-4'>
                        <blockquote>
                            <q>
                            We were having a lot of trouble finding an NFT Marketplace that offered all of the features we needed. We were lucky NFTify had been working hard to offer one of the wides feature offerings I’d seen.
                            </q>
                        </blockquote>
                        <figcaption>&mdash; Luke Layden, Strategic DESK Lead at CoinDesk</figcaption>
                    </figure>
                    
                </article>
            </div>
        </section>
    )
}

export default Stories;