import React from "react";
import ProjectDiv from "./ProjectDiv";

function SectionThree() {
  return (
    <div className="flex flex-col items-center space-y-12 lg:flex-row lg:space-x-12 lg:items-center">
      <ProjectDiv
        name="Google Clone"
        description="A google clone made with Next-Js and Tailwind CSS with Google API handeling the searches"
        image_url="/google.png"
        hyperlink="https://github.com/iYashodhan/google-xerox"
      />

      <ProjectDiv
        name="Leads Tracker Extension"
        description="A chrome extension made out of Vanilla Js, used to save the urls of the websites visited."
        image_url="/extension.png"
        hyperlink="https://github.com/iYashodhan/LeadsTrackerExtension"
      />

      <ProjectDiv
        name="This Portfolio"
        description="This website was designed from scratch, with figma. It is responsive, includes custom components and functionality."
        image_url="/this.png"
        hyperlink="https://github.com/iYashodhan"
      />
    </div>
  );
}

export default SectionThree;
