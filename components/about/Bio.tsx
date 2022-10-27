"use client";

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export function Bio() {
  return (
    <RoughNotationGroup show={true}>
      <p className="pt-2">
        Hello! I am Justin, a{" "}
        <RoughNotation type="highlight" animationDuration={200} color="yellow">
          full-stack{" "}
        </RoughNotation>
        software engineer based in Irvine, California. I love building
        interactive tools that are innovative, simple, and accessible.
      </p>
      <p className="pt-2">
        My current stack right now is
        <RoughNotation
          type="highlight"
          animationDuration={200}
          color="lavender"
        >
          {" "}
          React
        </RoughNotation>
        ,
        <RoughNotation type="highlight" animationDuration={200} color="pink">
          {" "}
          Next.js
        </RoughNotation>
        ,
        <RoughNotation
          type="highlight"
          animationDuration={200}
          color="lightGreen"
        >
          {" "}
          tRPC
        </RoughNotation>
        ,
        <RoughNotation type="highlight" animationDuration={200} color="salmon">
          {" "}
          TailwindCSS
        </RoughNotation>
        ,
        <RoughNotation
          type="highlight"
          animationDuration={200}
          color="lightBlue"
        >
          {" "}
          Nodejs
        </RoughNotation>
        , and
        <RoughNotation type="highlight" animationDuration={200} color="orange">
          {" "}
          ASP.net Core
        </RoughNotation>
        . I have also experience with technologies such as
        <RoughNotation type="underline" animationDuration={200}>
          {" "}
          Nest.js
        </RoughNotation>
        ,
        <RoughNotation type="underline" animationDuration={200}>
          {" "}
          SQL Server
        </RoughNotation>
        ,
        <RoughNotation type="underline" animationDuration={200}>
          {" "}
          Amazon AWS
        </RoughNotation>{" "}
        and
        <RoughNotation type="underline" animationDuration={200}>
          {" "}
          Azure
        </RoughNotation>
        .
      </p>
      <p className="pt-2">
        I&apos;m currently looking for a new role as developer.
        <RoughNotation type="circle" animationDuration={200} color="purple">
          <span className="font-medium"> Hire me?</span>
        </RoughNotation>
      </p>
    </RoughNotationGroup>
  );
}
