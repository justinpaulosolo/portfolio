import Image from "next/image";
import { Suspense } from "react";
import { Bio } from "../../components/about/Bio";

import picture from "../../public/bio-picture.jpeg";
export default function AboutPage() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div className="flex flex-col mx-auto max-w-3xl">
        <h1 className="font-bold text-4xl">About</h1>
        <div className="mx-auto mt-8">
          <div>
            <Image
              src={picture}
              alt="profile-pic"
              width={175}
              height={175}
              className="mb-2 rounded-2xl drop-shadow-md"
              placeholder="blur"
              loading="lazy"
            />
          </div>
        </div>
        <Bio />
        <h3 className="font-bold text-2xl pt-4">More info about me?</h3>
        <p className="pt-2">
          You can follow me on{" "}
          <a
            href="https://twitter.com/justinsolodev"
            className="underline text-blue-500"
            target="_blank"
            rel="noreferrer"
          >
            Twitter @justinsolodev
          </a>
          , or checkout my{" "}
          <a
            href="https://github.com/justinpaulosolo"
            className="underline text-blue-500"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          , and{" "}
          <a
            href="https://www.linkedin.com/in/justinpaulosolo/"
            className="underline text-blue-500"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          .
        </p>
      </div>
    </Suspense>
  );
}
