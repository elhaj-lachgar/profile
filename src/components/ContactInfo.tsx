"use client"
import React from "react";
import Image from "next/image";
import { Badge ,BadgeProps } from "@/components/ui/badge";
import { Facebook, Github } from "lucide-react";
import { Button } from "./ui/button";
import { LinkedinIcon } from "lucide-react";
import { MapPin } from "lucide-react";
import { ModeToggle } from "./ThemeToggle";
import Link from "next/link";


function ContactInfo() {

  
  return (
    <div className="flex flex-wrap w-full justify-center h-[625px]">
      <div className="w-11/12 rounded-xl flex flex-wrap justify-center items-center bg-white dark:bg-gray-600 min-h-[600px] p-3 shadow-2xl">
        <div className="w-full mx-auto flex justify-center">
          <Image
            src="/contact/image.jpg"
            alt=""
            width={100}
            height={100}
            style={{borderRadius:"50%"}}
          />
        </div>
        <h1 className="w-full text-center  text-3xl font-name font-bold">
          <span className="text-blue-500">Elhaj</span> Lachgar
        </h1>

        <div className="w-full flex justify-center">
          <Badge
            variant={"secondary"}
            className="px-4 py-2 text-xl text-muted-foreground dark:text-white"
          >
            Web Developer
          </Badge>
        </div>
        <div className="w-full flex  justify-center gap-x-5">
          <Link href={'https://github.com/elhaj-lachgar'} target="_blank"  >
            <Github
              className="rounded-full bg-black w-[50px] h-[50px] p-2 cursor-pointer text-white"
            />
          </Link>

          <Link href={"https://www.linkedin.com/in/felix-gamer-95a597291/"} target="_blank" >
            <LinkedinIcon
              fontSize={"150px"}
              className=" text-white w-[50px] h-[50px]  cursor-pointer bg-blue-600 p-2 rounded-full border-none"
            />
          </Link>

          <Link href={"https://web.facebook.com/haj.chgar.3/"} target="_blank" >
            <Facebook
              fontSize={"150px"}
              className=" text-white w-[50px] h-[50px]  cursor-pointer bg-blue-800 p-2 rounded-full border-none"
            />
          </Link>
        </div>

        <div className="w-full bg-gray-300 flex flex-wrap justify-center py-2 rounded-md gap-y-4 dark:bg-gray-700 ">
          <div className="w-full flex justify-center items-center gap-x-2 ">
            <MapPin />
            <p className="text-muted-foreground dark:text-white text-xl lg:text-sm">Casablanca.Bouznika</p>
          </div>
          <p className="text-muted-foreground dark:text-white  text-xl lg:text-sm">elhajlachgar@gmail.com</p>
          <p className="text-muted-foreground dark:text-white text-xl lg:text-sm">(+212)624-56-89-23</p>
        </div>

        <div className="w-full flex flex-wrap gap-x-2 justify-center">
          <Link href={"mailto:elhajlachgar@gmail.com"}>
          <Button size={"sm"} >
            Email me
          </Button>
          </Link>
          <ModeToggle/>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
