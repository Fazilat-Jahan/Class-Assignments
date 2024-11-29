import React from 'react'
import ChildComponents from './childComponents'

const parentComponents = () => {
    let about = "About MySelf"
    let myName = "I'm Fazilat Jahan,";
    let profession = "a FontEnd Developer";
    let education= "& Pursuing Degree in Agentic AI Engineering"
    return (
        <div>
            <ChildComponents about={about} />
            <ChildComponents myname={myName} />
            <ChildComponents profession= {profession}/>
            <ChildComponents education= {education}/>
        </div>
    )
}

export default parentComponents;
