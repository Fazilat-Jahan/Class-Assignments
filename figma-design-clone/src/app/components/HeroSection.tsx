import React from 'react'

const HeroSection = () => {
    return (
        <div className=' flex w-[1920] h-[829] px-[220] py-[140] bg-[#043873]'>
            <div className='w-1/2 flex flex-col '>
                <div className='m-[60px] w-[656px] h-[361px] font-[inter] text-white '>

                    <h1 className=' text-[64px] leading-[auto] font-bold my-6'>Get More Done With whitepace</h1>
                    <h2 className=' text-[18px] font-light leading-[30px]'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</h2>
                    <button className='w-[219px] h-[63px] p-5 bg-[#4F9CF9] rounded-lg  text-[18px] leading-[23px] my-[60px] font-normal'>Try Whitepace free </button>
                </div>
            </div>

            <div className='w-1/2 flex flex-col'>
                <div className='bg-[#C4DEFD] w-[824px] h-[549px] m-[10px] '></div>
            </div>

        </div>
    )
}

export default HeroSection

