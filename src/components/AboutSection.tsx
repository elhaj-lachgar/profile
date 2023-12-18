"use client";
import React from "react";
import AboutItem from "./AboutItem";
import ABOUT_ITEMS from "@/utils/AboutItems";
import { SubComponentsProps } from "@/lib/utils";
import { Button } from "./ui/button";

function AboutSection(props: SubComponentsProps) {
  return (
    <div className="w-full h-full flex flex-wrap">
      <div className=" flex w-full py-5 px-10 flex-wrap gap-y-10  dark:bg-gray-400">
        <div className="flex justify-between w-full gap-x-4 items-center">
          <h1 className="lg:text-4xl text-xl  text-muted-foreground font-bold dark:text-white">
            About
          </h1>{" "}
          <div className="flex lg:gap-x-2 gap-x-1">
            <Button
              className="lg:text-xl text-lg lg:font-bold"
              onClick={() => props.setAction("projects")}
            >
              Projects
            </Button>
            <Button
              className="lg:text-xl text-lg lg:font-bold"
              onClick={() => props.setAction("Resume")}
            >
              Resume
            </Button>
          </div>
        </div>
        <p className="w-full">
          {" "}
          my name is elhaj lachgar i'm student in Associate's Degree in faclty
          of science and technology I learn by my self programation of web
          application ,I start by c++ and algouritme then I pass to learn javascript 
          then React then Next then node then express  
        </p>
      </div>
      <div className="flex bg-gray-300  dark:bg-gray-700 w-full  h-full  lg:h-[432px] rounded-t-none rounded-xl">
        <div className="flex h-full w-full py-5 px-10 flex-wrap">
          <h2 className="text-2xl text-muted-foreground font-bold">
            What I am doing
          </h2>
          <div className="flex flex-wrap mt-5 gap-x-[20%] gap-y-5 justify-center">
            {ABOUT_ITEMS.map((element) => (
              <AboutItem
                description={element.description}
                Icon={element.Icon}
                title={element.title}
                key={element.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
