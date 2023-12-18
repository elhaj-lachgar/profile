import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PROJECTS_ITEMS from "@/utils/ProjectsItems";

type ProjectItemProps = (typeof PROJECTS_ITEMS)[number];

function ProjectItem({ details, image, name }: ProjectItemProps) {
  return (
    <Card className="w-full h-full flex justify-center flex-col cursor-pointer border-none">
      <div className="relative w-full h-[70%]">
        <Image src ={image} alt={"image of projects"} fill className="rounded-t-lg"/>
      </div>
      <CardFooter className="bg-gray-200 dark:bg-gray-400 rounded-b-lg" >
        {name}
      </CardFooter>
    </Card>
  );
}

export default ProjectItem;
