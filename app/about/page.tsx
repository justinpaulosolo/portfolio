import Image from "next/image";
import { Bio } from "../../components/about/Bio";

import picture from "../../public/bio-picture.jpg";
export default function About() {
  return (
    <div className="flex flex-col mx-auto max-w-3xl">
      <h1 className="font-bold text-4xl">About</h1>
      <div className="mx-auto mt-8">
        <Image
          src={picture}
          alt="profile-pic"
          width={200}
          height={200}
          className="mb-2 rounded-2xl drop-shadow-md"
          priority
        />
      </div>
      <Bio />

      <h3 className="font-bold text-2xl pt-2">On the web</h3>
    </div>
  );
}
