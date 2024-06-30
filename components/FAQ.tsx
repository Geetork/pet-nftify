'use client';

import React, { useState } from 'react';
import { motion, MotionProps, Variants } from 'framer-motion';
import Image from 'next/image';

const definitionList = [
  {
    question: 'What is NFTify and how does it work?',
    answer: 'NFTify is a no-code NFT marketplace solution for you to build, sell and grow an NFT business. You can create and customize a NFT storefront or marketplace, list NFTs to sell in different methods, and promote the site with built-in marketing tools. NFTify is a Platform as a Service (PaaS), meaning you can access and manage the business from anywhere, without having to worry about maintenance or upgrades of the app and your web servers.'
  }, 
  {
    question: 'What do I need to start using NFTify?',
    answer: 'To register for an NFTify account, you will need an email address and a MetaMask wallet. To start selling, you’ll need to upload your NFTs, then create sell orders for the aforementioned NFTs. For the full checklist, kindly refer to this article.'
  },
  {
    question: 'Do I need coding knowledge to use NFTify?',
    answer: 'No, you don’t need coding knowledge to use NFTify. All essential features & beyond are provided in our user-friendly dashboard. You can also customize the look and feel of the site using the visual editor and themes.'
  },
  {
    question: 'How much does NFTify cost?',
    answer: 'New users can enjoy a 30-day free trial, then subscribe to one of our plans - starting from just $19/month.'
  },
  {
    question: 'Does NFTify provide custom feature development?',
    answer: 'Yes, we do. Our development team has 5+ years of experience delivering blockchain solutions of all scales, speeds and complexities to global clients. If you have any specific requirements, kindly put in a request in our customization form.'
  }
]

const Question: React.FC<{
  question: string,
  answer: string,
}> = ({ question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <React.Fragment>
      <dt className='text-gray-200 flex gap-3 cursor-pointer mt-10 pb-2' onClick={() => setIsVisible(prevState => !prevState)}>
        <Image 
          src={isVisible ?
            '/assets/minus-icon.svg' :
            '/assets/plus-icon.svg'}
          alt='plus-icon'
          width={20}
          height={20}
        />
        <span className='font-bold text-lg sm:text-2xl'>{question}</span>
      </dt>
      {
        isVisible && <motion.dd initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='text-gray-400 pl-8'>{answer}</motion.dd>
      }
    </React.Fragment>
  )
}

const FAQ = () => {
  return (
    <section className='bg-black w-full pt-24 pb-10 px-4'>
      <h1 className='text-gray-200 font-medium text-4xl md:text-5xl leading-tight'>Frequently asked questions</h1>
      <dl className=''>
        {
          definitionList.map((def, id) => (
            <Question 
              key={id} 
              answer={def.answer}
              question={def.question}/> 
          ))
        }
      </dl>
    </section>
  )
}

export default FAQ;