import React from 'react';
import './globals.css';
import { basePath } from '../next.config';

const RootLayout = ({ 
  children 
}: Readonly<{children: React.ReactNode }>) => {
  return (
    <html lang='en'>
      <head>
        <link rel="shortcut icon" href={`${basePath}/favicon.ico`} type="image/x-icon" />
      </head>
      <body className='relative'>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;