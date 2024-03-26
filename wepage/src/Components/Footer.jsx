import React from 'react'
import { Link } from 'react-router-dom'
import footerimg from '../assets/logo.jpg'

function Footer() {
    return (
        <div className='w-full h-[100%] p-4 flex flex-col items-center justify-between gap-2'>
            <div className='w-full h-[100%] p-10 flex  items-center justify-between gap-8'>
                <div className='flex gap-10'>
                    <div className='flex flex-col items-start justify-center text-[1rem] gap-1 '>
                        <Link to='/aboutus' className='text-[1.5rem] '>About us </Link>
                        <Link to='/aboutus'>About us </Link>
                        <Link to='/aboutus'>contact us </Link>
                        <Link to='/aboutus'>wepage us </Link>
                    </div>
                    <div className='flex flex-col items-start justify-center text-[1rem] gap-1'>
                        <Link to='/aboutus' className='text-[1.5rem] '>About us </Link>
                        <Link to='/aboutus'>clients us </Link>
                        <Link to='/aboutus'>ratings us </Link>
                        <Link to='/aboutus'>working us </Link>
                    </div>
                </div>
                <div className='max-w-[10rem]'>
                    <img src={footerimg} alt="signode" />
                </div>
            </div>
            <div className='text-[1rem] '>
                <h1>Copyright C & Developed by WePage Solutions</h1>
            </div>
        </div>

    )
}

export default Footer