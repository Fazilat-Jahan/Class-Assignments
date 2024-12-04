import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='flex justify-between w-[1920] h-[92] bg-[#043873] px-[220] py-[16] items-center '>
                <div>
                    <Image src="/Logo.png" alt='whitespace logo' width={191} height={34} />
                </div>

                <div className='flex w-[737.5] h-[60] items-center justify-between gap-60 '>
                    <ul className=' flex w-[549] h-[23] gap-[32px] text-white justify-between font-[inter]  '>
                        <li>Products</li>
                        <li>Solution</li>
                        <li>Resources</li>
                        <li>Pricing</li>
                    </ul>
                    <button className='w-[126] h-[60]  bg-[#FFE492] text-[#043873] rounded-lg px-[40] py-[16] font-[inter] text-[18px] leading-[23px] font-semibold'>Login</button>
                </div>

            
        </div>
    )
}

export default Navbar
