import React from "react";
import SkillsDiv from "./SkillsDiv";

function SectionThree() {
  return (
    <div className="flex space-x-12 p-8">
      <p className="font-Heebo text-3xl">What I do? Code with purpose.</p>
      <div className="flex flex-col space-y-2">
        <p className="font-Heebo text-lg font-bold hover:underline shadow-sm">
          Technologies
        </p>
        <div className="grid grid-cols-3 gap-2">
          <SkillsDiv skill="HTML" />
          <SkillsDiv skill="CSS(Tailwind)" />
          <SkillsDiv skill="Python (Django)" />
          <SkillsDiv skill="Flutter/FlutterFlow" />
          <SkillsDiv skill="C/C++" />
          <SkillsDiv skill="JavaScript (NextJs, ReactJs)" />

          <SkillsDiv skill="Git/Github" />
          <SkillsDiv skill="NPM/Yarn" />
          <SkillsDiv skill="Linux" />
          <SkillsDiv skill="AWS - Lightsail" />
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <p className="font-Heebo text-lg font-bold hover:underline shadow-sm">
          Soft Skills
        </p>
        <div className="grid grid-cols-3 gap-2">
          <SkillsDiv skill="Communication" />
          <SkillsDiv skill="Problem-solving" />
          <SkillsDiv skill="Quick-Learning" />
          <SkillsDiv skill="Leader" />
          <SkillsDiv skill="Independent" />
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
