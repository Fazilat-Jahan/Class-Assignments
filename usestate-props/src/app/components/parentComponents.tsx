import React from 'react'
import ChildComponents from './childComponents'

const parentComponents = () => {
    const about = "About MySelf"
    const myName = "I'm Fazilat Jahan,";
    const profession = "a FrontEnd Developer";
    const education= "& Pursuing Degree in Agentic AI Engineering"
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
