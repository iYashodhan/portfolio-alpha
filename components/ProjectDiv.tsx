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
    <div className="flex flex-col space-y-2 p-2">
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
      <a href={hyperlink} className="text-md font-Heebo font-bold text-white w-fit hover:underline">{name}</a>
      <p className="text-xs font-Heebo text-white">{description}</p>
    </div>
  );
}

export default ProjectDiv;
