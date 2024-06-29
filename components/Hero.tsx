'use client';

import React, { useEffect, useState } from 'react';
import { Button } from './index';

const typedWords = ['coding', 'upfront cost', 'growth limits'];

const Typewriter: React.FC<{
  words: string[],
  delay: number
}> = ({ words, delay }) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const word = words[currentWordIndex];
    const isLastCharacter = currentIndex === word.length;

    if (isDeleting) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText.slice(0, -1));
        setCurrentIndex(prevIndex => prevIndex - 1);
      }, isLastCharacter ? delay * 20 : delay);
  
      if (currentIndex === 0) {
        const nextIndex = (currentWordIndex + 1) % words.length;

        setCurrentWordIndex(nextIndex);
        setCurrentWord(words[nextIndex]);
        setIsDeleting(false);
      }

      return () => clearTimeout(timeout);
    } else if (currentIndex < word.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + word[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      if (currentIndex === word.length - 1) {
        setIsDeleting(true);
      }
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentText, currentWordIndex, currentWord]);

  return <span className='underline underline-offset-[12px] decoration-2'>{currentText}</span>
}

const Hero: React.FC = () => {
  return (
    <section className='flex flex-col w-full bg-hero bg-no-repeat bg-cover h-screen'>
      <div className='flex-1 relative'>
        <div className='flex flex-col gap-6 absolute bottom-[80px] px-4 w-full'>
          <p className='text-gray-100 font-bold text-4xl leading-tight md:text-7xl sm:text-6xl'>
            Your own<br/>
            NFT Marketplace<br/>
            without&nbsp;
            <Typewriter words={typedWords} delay={100} />
          </p>

          <p className='text-gray-400 max-w-[24rem]'>
            The fastest and easiest way to fully unlock the potential of your digital assets. Create and run an exclusive marketplace for your NFT business today!
          </p>

          <form className='flex gap-4 flex-wrap w-full xs:w-auto xs:flex-nowrap'>
            <input type="email" name="email" id="email" placeholder='Enter your email' maxLength={264} className='xs:w-[344px] xs:h-[52px] h-[44px] rounded-lg text-center focus:outline-none focus:ring-1 focus:border-pink-500 focus:ring-pink-500 w-full'/>
            <Button className={'xs:h-[52px] h-[44px] xs:w-auto w-full'} name='Start FREE'/>
          </form>
        </div>
      </div>

      <div className='flex gap-0 xs:gap-6 xs:justify-start justify-between pb-8 px-4 text-gray-200'>
        <div className='flex flex-col xs:flex-row xs:items-end gap-2'>
          <span className='font-bold text-2xl xs:text-sm'>$18M</span>
          <span className='text-sm w-[65px] xs:w-full'>Transaction Volume</span>
        </div>

        <div className='flex flex-col xs:flex-row xs:items-end gap-2'>
          <span className='font-bold text-2xl xs:text-sm'>19K</span>
          <span className='text-sm w-[65px] xs:w-full'>Business Built</span>
        </div>

        <div className='flex flex-col xs:flex-row xs:items-end gap-2'>
          <span className='font-bold text-2xl xs:text-sm'>1,102,841+</span>
          <span className='text-sm w-[65px] xs:w-full'>NFTs Listed</span>
        </div>
      </div>
      
    </section>
  )
}

export default Hero;