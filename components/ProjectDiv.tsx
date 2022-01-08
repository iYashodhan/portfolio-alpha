import React from "react";
import Image from "next/image";

function ProjectDiv({
  name,
  description,
  image_url,
  hyperlink,
}: {
  name: string;
  description: string;
  image_url: string;
  hyperlink: string;
}) {
  return (
    <div className="bg-white p-2 shadow-lg | flex flex-col space-y-2">
      <a href={hyperlink}>
        <Image
          src={image_url}
          height={200}
          width={300}
          alt={name}
          loading="lazy"
          className="hover:blur-sm"
        />
      </a>
      <p className="text-md font-Heebo font-bold text-[#1B1F24] w-fit">{name}</p>
      <p className="text-xs font-Heebo text-[#1B1F24]">{description}</p>
    </div>
  );
}

export default ProjectDiv;
