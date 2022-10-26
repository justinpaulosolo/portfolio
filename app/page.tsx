import Image from "next/image";
import { SocialButtons } from "../components/home/SocialButtons";
import profile from "../public/profile.jpeg";
export default function Home() {
  return (
    <div className="flex flex-col mx-auto max-w-3xl">
      <div className="mb-4 flex flex-col-reverse items-center space-x-4 md:flex-row">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold md:text-5xl">Justin Solo</h1>
          <p className="font-formal text-sm uppercase tracking-wider">
            Developer / Creator
          </p>
          <p className="text-base">
            I&apos;m passionate about creating innovative and accessible
            full-stack applications.
          </p>
          <SocialButtons />
        </div>
        <div className="md-flex items-center">
          <Image
            src={profile}
            alt="profile-pic"
            width={150}
            height={150}
            className="mb-2 rounded-full md:mb-0 md:w-fit md:rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
