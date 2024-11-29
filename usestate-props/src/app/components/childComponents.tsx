import React from 'react'

const childComponents = (props: any) => {
    return (
        <div>
            <h1 className='font-extrabold text-4xl text-black underline'> {props.about} </h1>
            <p className='font-bold text-lg text-white p-4'>
                {props.myname}
                {props.profession}
                {props.education}
            </p>
            {/* <p className='font-bold text-lg text-white'>{props.profession} </p>
            <p className='font-bold text-lg text-white'>{props.education}  </p> */}
        </div>
    )
}

export default childComponents;
