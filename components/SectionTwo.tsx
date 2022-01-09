import React from "react";
import SkillsDiv from "./SkillsDiv";

function SectionThree() {
  return (
    <div className="flex flex-col space-y-6 lg:space-x-24 lg:flex-row lg:items-start p-8">
      <p className="font-Heebo text-3xl">What I do? Code with purpose.</p>
      <div className="flex flex-col space-y-2">
        <p className="font-Heebo text-lg font-bold hover:underline shadow-sm">
          Technologies
        </p>
        <div className="grid grid-cols-3 grid-rows-auto gap-2">
          <SkillsDiv skill="HTML" />
          <SkillsDiv skill="CSS(Tailwind)" />
          <SkillsDiv skill="Python" />
          <SkillsDiv skill="Django" />
          <SkillsDiv skill="Flutter" />
          <SkillsDiv skill="C/C++" />
          <SkillsDiv skill="JavaScript" />
          <SkillsDiv skill="Next Js" />

          <SkillsDiv skill="Git/Github" />
          <SkillsDiv skill="NPM/Yarn" />
          <SkillsDiv skill="Linux" />
          <SkillsDiv skill="Lightsail" />
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <p className="font-Heebo text-lg font-bold hover:underline shadow-sm">
          Soft Skills
        </p>
        <div className="grid grid-cols-3 grid-rows-auto gap-2">
          <SkillsDiv skill="Problem-solving" />
          <SkillsDiv skill="Quick-Learning" />
          <SkillsDiv skill="Leader" />
          <SkillsDiv skill="Independent" />
          <SkillsDiv skill="Communications" />
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
