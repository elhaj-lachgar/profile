"use client";
import React from "react";
import { ProgressDemo } from "./Progress";
import { Button } from "./ui/button";
import { SubComponentsProps } from "@/lib/utils";

function Resume(props : SubComponentsProps) {
  return (
    <div className="flex flex-wrap w-full h-full px-10 py-5 gap-x-[50px] gap-y-10 justify-center lg:justify-around dark:bg-gray-500 rounded-2xl shadow-2xl">
      <div className="flex justify-between w-full gap-x-4 items-center">
        <h1 className="lg:text-4xl  text-xl font-bold "> Resume</h1>
        <div className="flex lg:gap-x-2 gap-x-1">
          <Button
            className="lg:text-xl text-lg lg:font-bold"
            onClick={() => props.setAction("about")}
          >
            About
          </Button>
          <Button
            className="lg:text-xl text-lg lg:font-bold"
            onClick={() => props.setAction("projects")}
          >
            Projects
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-wrap lg:w-[40%] gap-y-2">
        <h2 className="text-xl font-blod w-full"> Eduction</h2>
        <h2 className="text-xl font-blod w-full">Associate's Degree</h2>
        <h3 className=" font-blod w-full text-lg">
          faclty of science and technology
        </h3>
        <p>I learn my soft skiles by me self</p>
      </div>

      <div className="w-full flex flex-wrap lg:w-[40%] gap-y-2 ">
        <h2 className="text-xl font-blod w-full"> Exprience</h2>
        <h2 className="text-xl font-blod w-full">Freelancer</h2>
        <h3 className=" font-blod w-full text-lg">
            Rising talent in up work
        </h3>
        <p>fix same begs in next.js application</p>
      </div>
      <div className="w-full flex flex-wrap lg:w-[40%] gap-y-5">
        <h2 className="text-xl font-blod w-full"> Language & Framework</h2>


        <div className="flex gap-x-2 items-center">
          <h1 className="w-20">javascript</h1>
          <ProgressDemo final_progress={90} content="node" />
        </div>
        <div className="flex gap-x-2 items-center">
          <h1 className="w-20">typescript</h1>
          <ProgressDemo final_progress={85} content="node" />
        </div>

        <div className="flex gap-x-2 items-center">
          <h1 className="w-20">Next</h1>
          <ProgressDemo final_progress={90} content="node" />
        </div>
        <div className="flex gap-x-2 items-center">
          <h1 className="w-20">React</h1>
          <ProgressDemo final_progress={85} content="node" />
        </div>
        <div className="flex gap-x-2 items-center">
          <h1 className="w-20">Express</h1>
          <ProgressDemo final_progress={90} content="node" />
        </div>
      </div>
      <div className="w-full flex flex-wrap lg:w-[40%] gap-y-5 h-[200px]">
        <h2 className="text-xl font-blod w-full"> Tools & Softwares</h2>

        <div className="flex gap-x-2 items-center">
          <h1 className="w-20">Git</h1>
          <ProgressDemo final_progress={80} content="node" />
        </div>

        <div className="flex gap-x-2 items-center">
          <h1 className="w-20">Redux</h1>
          <ProgressDemo final_progress={80} content="node" />
        </div>

        <div className="flex gap-x-2 items-center">
          <h1 className="w-20">postman</h1>
          <ProgressDemo final_progress={90} content="node" />
        </div>

        <div className="flex gap-x-2 items-center">
          <h1 className="w-20">Figma</h1>
          <ProgressDemo final_progress={70} content="node" />
        </div>
      </div>
      <div className="w-full flex flex-wrap lg:w-[40%] gap-y-2"></div>
    </div>
  );
}

export default Resume;
