import React from 'react'

function SkillsDiv({skill} : {skill:string}) {
    return (
        <div className={'bg-white p-1 px-2 rounded-lg shadow-md outline-white w-full hover:bg-[#1B1F24] ${classNameProps}'}>
            <p className="font-Heebo text-xs text-[#1B1F24] hover:text-white hover:font-bold">{skill}</p>  
        </div>
    )
}

export default SkillsDiv
