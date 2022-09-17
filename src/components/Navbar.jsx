import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className='w-full h-12 px-4 bg-sky-600 shadow-md flex items-center justify-between mb-12'>
            <Link to="/" className='text-white  '>Logo</Link>
            <ul className='flex items-center'>
                <li>
                    <Link to="/trending" className='text-white '>Trending</Link>
                </li>
            </ul>

        </nav>
    )
}
