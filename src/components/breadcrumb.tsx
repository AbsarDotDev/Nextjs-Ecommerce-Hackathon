'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const Breadcrumb = () => {
    const pathname = usePathname();
    const pathParts: string[] = pathname.split('/').filter(part => part !== '');
    return (
        <div className="bg-cover bg-[url('/painting2.jpg')] h-[40vh] flex items-center bg-center  py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
                <nav className="flex items-center text-xl leading-5 font-medium">
                    <Link href="/" className="text-white hover:text-gray-200 transition duration-150 ease-in-out">Home</Link>
                    {pathParts.map((part, index) => (
                        <React.Fragment key={part}>
                            <svg className="flex-shrink-0 mx-2 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                            </svg>

                            {index === pathParts.length - 1 ? (
                                <span className="text-white">{part}</span>
                            ) : (
                                <a href={`/${pathParts.slice(0, index + 1).join('/')}`} className="text-white hover:text-gray-800 transition duration-150 ease-in-out">{part}</a>
                            )}
                        </React.Fragment>
                    ))}
                </nav>
            </div>
        </div>


    )
}

export default Breadcrumb




