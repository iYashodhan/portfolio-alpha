import React from 'react'

function SkillsDiv({skill} : {skill:string}) {
    return (
        <div className={'bg-white p-1 px-2 rounded-lg shadow-md border hover:bg-[#1B1F24] w-fit ${classNameProps}'}>
            <p className="font-Heebo text-xs text-[#1B1F24] hover:text-white hover:font-bold">{skill}</p>  
        </div>
    )
}

export default SkillsDiv
