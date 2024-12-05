import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='flex justify-between w-[1920px] h-[92px] bg-[#043873] px-[220px] py-[16px] items-center '>
                <div>
                    <Image src="/Logo.png" alt='whitespace logo' width={191} height={34} />
                </div>

                <div className='flex w-[737.5px] h-[60px] items-center justify-between gap-60 '>
                    <ul className=' flex w-[549px] h-[23px] gap-[32px] text-white justify-between font-[inter]  '>
                        <li>Products</li>
                        <li>Solution</li>
                        <li>Resources</li>
                        <li>Pricing</li>
                    </ul>
                    <button className='w-[126px] h-[60px]  bg-[#FFE492] text-[#043873] rounded-lg px-[40px] py-[16px] font-[inter] text-[18px] leading-[23px] font-semibold'>Login</button>
                </div>

            
        </div>
    )
}

export default Navbar
