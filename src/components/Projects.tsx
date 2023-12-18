import PROJECTS_ITEMS from "@/utils/ProjectsItems";
import React from "react";
import ProjectItem from "./ProjectItem";
import { Button } from "./ui/button";
import { SubComponentsProps } from "@/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function Projects(props: SubComponentsProps) {
  return (
    <div className="flex flex-wrap w-full h-full px-10 py-5 gap-x-[50px] gap-y-10 justify-center lg:justify-around dark:bg-gray-500 rounded-2xl shadow-2xl">
      <div className="w-full flex justify-between gap-x-4 items-center">
        <h1 className="text-xl lg:text-4xl  font-bold w-full"> Projects</h1>
        <div className="flex gap-x-1 lg:gap-x-2">
          <Button
            className="lg:text-xl text-lg lg:font-bold"
            onClick={() => props.setAction("about")}
          >
            About
          </Button>
          <Button
            className="lg:text-xl text-lg lg:font-bold"
            onClick={() => props.setAction("Resume")}
          >
            Resume
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap w-full h-full justify-start gap-x-[75px] gap-y-[20px]">
        {PROJECTS_ITEMS.map((element) => (
          <div className="w-full lg:w-[200px] h-[150px]">
            <HoverCard>
              <HoverCardTrigger>
                  <ProjectItem
                  details={element.details}
                  image={element.image}
                  name={element.name}
                  key={element.name}
                />
              </HoverCardTrigger>
              <HoverCardContent>
                {element.details.description}
              </HoverCardContent>
            </HoverCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
