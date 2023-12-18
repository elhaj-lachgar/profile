"use client"
import AboutSection from "@/components/AboutSection";
import ContactInfo from "@/components/ContactInfo";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import { ACTIONS } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";



export default function Home() {
  let [ action ,setAction ] = useState<ACTIONS>("Resume");
  return (
    <main className="w-full bg-blue-300 min-h-[100vh] dark:bg-blue-950">
      <div className="flex flex-wrap justify-center w-11/12 lg:7/12 mx-auto py-20 lg:gap-x-5 gap-y-5 items-center">
        <div className="w-full lg:w-[20%]  justify-center">
          <ContactInfo />
        </div>
        <div className="flex flex-wrap justify-center lg:w-[70%] w-11/12 bg-white rounded-2xl min-h-[625px] lg:h-[625px]">
          {
              action == "Resume"
              ?
              (<Resume action={action} setAction={setAction}/>)
              :
              action == "about"
              ?
              (<AboutSection action={action} setAction={setAction}/>)
              :
              action == "projects"
              ?
              (<Projects  action={action} setAction={setAction} />)
              :
              null
          }
        </div>
      </div>
    </main>
  );
}
