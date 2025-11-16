import Navbar from '@/components/Navbar';
import React from 'react'

const HomeLayout = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>

            <header className='fixed w-full top-0'>
                <Navbar />
            </header>
            <div className='mt-8'>
                {children}
            </div>
        </div>
    )
}

export default HomeLayout
