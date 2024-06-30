'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './index';

const NavItem: React.FC<{ 
    title: string, 
    dropDownTitles?: string[] }> = ({ title, dropDownTitles }) => {
    return (
        <div className='flex flex-col gap-2 dropdown group relative hover:text-gray-400 h-full justify-center'>
            <Link href='#' id='dropdown-hover' className='flex gap-3' data-target='dropdown-hover'>
                <h1>{title}</h1>
                { dropDownTitles && <h1 className='text-[0.8rem] pt-[0.1rem]'>▼</h1> }
            </Link>
            {
                dropDownTitles && (
                    <ul className='flex-col gap-2 rounded-xl backdrop-blur-md bg-white/15 dropdown-menu hidden group-hover:block absolute top-11 -left-4 py-1 group-hover:animate-fadeInDown' aria-labelledby='dropdown-hover'>
                    {
                        dropDownTitles.map((item, id) => (
                            <li key={id} className='hover:bg-white/15 hover:text-gray-300'>
                                <Link href='#' className='block text-nowrap py-2 px-4'>
                                    {item}
                                </Link>
                            </li>
                        ))
                    }
                    </ul>
                )
            }
        </div>
    )
}

const Header: React.FC = () => {
    const [headerColor, setHeaderColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setHeaderColor("rgb(0, 0, 0, 0.5)") : setHeaderColor("transparent");
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);

        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <header className='w-full flex flex-nowrap fixed t-0 px-4 py-2 justify-between items-center text-gray-300 font-bold text-lg h-16 z-10' style={{ backgroundColor: headerColor, transition: 'all 1s' }}>
            <div className='flex gap-20 h-full items-center'>
                <a href="#">
                    <Image
                        src="/assets/icon.svg"
                        alt='logo'
                        height={36}
                        width={119}
                    />
                </a>

                <nav className='flex gap-6 h-full max-lg:hidden'>
                    <NavItem title={'Features'} dropDownTitles={['Build Store', 'Sell NFTs', 'Grow Business']}/>
                    <NavItem title={'Services'} dropDownTitles={['Concierge', 'Customization']}/>
                    <NavItem title={'Pricing'}/>
                </nav>
            </div>

            <div className='flex gap-20 items-center h-full max-lg:hidden'>
                <NavItem title={'Learn'} dropDownTitles={['About NFTify', 'Whitepaper', 'Help Center', 'Video Tutorials', 'Blog']}/>

                <div className='flex gap-2 h-full'>
                    <Button type='secondary' name='Login'/>
                    <Button name="Start - It's FREE"/>
                </div>
            </div>

            <div className='group hidden max-lg:block w-12 h-8 cursor-pointer'>
                <div className="mt-4 w-12 h-0.5 bg-gray-300 before:absolute before:-translate-y-2.5 before:bg-gray-300 before:w-12 before:h-0.5 after:absolute after:translate-y-2.5 after:w-6 after:h-0.5 after:bg-gray-300 after:translate-x-6 group-hover:after:w-12 group-hover:after:translate-x-0 after:transition-all ease-in-out after:duration-300 group-hover:bg-slate-400 group-hover:before:bg-slate-400 group-hover:after:bg-slate-400"></div>
            </div>
        </header>
  )
}

export default Header;