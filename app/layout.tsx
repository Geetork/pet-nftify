import React from 'react';
import './globals.css';

const RootLayout = ({ 
  children 
}: Readonly<{children: React.ReactNode }>) => {
  return (
    <html lang='en'>
        <body className=''>
          {children}
        </body>
    </html>
  )
}

export default RootLayout;