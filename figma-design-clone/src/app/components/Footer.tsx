import React from 'react'
import Image from 'next/image'

const footer = () => {
    return (
        <div className='w-[1920px] h-[461px] pt-[140px] pb-[32px] px-[220px] bg-[#043873] '>
            <div className='h-[289px] w-[1480px]'>
                <div className='space-x-[100px] flex text-white w-[1480px] h-[169px]'>

                    <div className='w-[295px] h-[169px] '>
                        <Image src={"/Logo.png"} alt='WhiteSpace' width={191} height={34} />
                        <div className='pt-[15px] font-light text-[18px] font-[inter] leading-[30px] w-[240px] h-[120px]'>whitepace was created for the new ways we live and work. We make a better workspace around the world</div>
                    </div>

                    <div className='w-[295px] h-[127px] space-y-[15px]'>
                        <h1 className='font-bold text-[18px] font-[inter]'>Product</h1>
                        <ul className='space-y-[15px]  font-light text-[16px] font-[inter] leading-[20px]'> <li>Overview</li>
                            <li>Pricing</li>
                            <li>Customer Services</li> </ul>
                    </div>


                    <div className='w-[295px] h-[130px] space-y-[16px]'>
                        <h1 className='font-bold text-[18px] font-[inter]'>Product</h1>
                        <ul className='space-y-[16px] font-light text-[16px] font-[inter] leading-[20px]'> <li>Blog</li>
                            <li>Guids & Tutorials</li>
                            <li>Help Center</li> </ul>
                    </div>


                    <div className='w-[295px] h-[130px] space-y-[15px]'>
                        <h1 className='font-bold text-[18px] font-[inter]'>Product</h1>
                        <ul className='space-y-[15px] font-light text-[16px] font-[inter] leading-[20px]'> <li>About Us</li>
                            <li>Careers</li>
                            <li>Media Kit</li> </ul></div>
                </div>


                <div className="border border-[#2E4E73] mt-[100px]"></div>
                <div className='w-[1480px] h-[20px] font-medium text-[16px] font-[inter] leading-5 text-white text-center m-5 '>
                    @2021 Whitpace LLC.
                </div>

            </div>
        </div>
    )
}

export default footer
