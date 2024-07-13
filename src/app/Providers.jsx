'use clinet';

import {ThemeProvider} from 'next-themes'


export default function Providers({children}) {
  return (
    <ThemeProvider defaultTheme='system' attributes='class'>
        <div className='text-gray-700 dark:text-gray-200 dark:bg-gray-700 mi-h-screen select-none tranisition-colors duration-300'>
        {children}
        </div>
    </ThemeProvider>

  )
}
