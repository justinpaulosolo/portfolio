"use client";
import Image from "next/image";
import { SocialButtons } from "./SocialButtons";
import profile from "../../public/profile.jpeg";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export function HeroSection() {
  return (
    <div className="mb-4 flex flex-col-reverse items-center space-x-4 md:flex-row">
      <div className="space-y-2">
        <RoughNotationGroup show={true}>
          <h1 className="text-3xl font-bold md:text-5xl">Justin Solo</h1>
          <p className="font-formal text-sm uppercase tracking-wider">
            <RoughNotation
              type="highlight"
              color="yellow"
              order={1}
              animationDuration={300}
            >
              Developer
            </RoughNotation>
            {" / "}
            <RoughNotation
              type="highlight"
              color="pink"
              order={2}
              animationDuration={300}
            >
              Creator
            </RoughNotation>{" "}
          </p>
          <p className="text-base">
            I&apos;m passionate about creating{" "}
            <RoughNotation
              type="highlight"
              color="lavender"
              order={3}
              animationDuration={300}
            >
              innovative
            </RoughNotation>{" "}
            and accessible
            <RoughNotation
              type="highlight"
              color="skyblue"
              order={4}
              animationDuration={300}
              multiline={true}
            >
              full-stack applications
            </RoughNotation>
            .
          </p>
          <p>
            I&apos;m currently looking for a new role as developer.
            <RoughNotation type="circle" order={5} animationDuration={300}>
              <span className="font-medium"> Hire me?</span>
            </RoughNotation>
          </p>
          <SocialButtons />
        </RoughNotationGroup>
      </div>
      <div className="md-flex items-center">
        <Image
          src={profile}
          alt="profile-pic"
          width={175}
          height={175}
          className="mb-2 rounded-2xl"
          priority
        />
      </div>
    </div>
  );
}
