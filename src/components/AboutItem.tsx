import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ABOUT_ITEMS from "@/utils/AboutItems"


type Items = typeof ABOUT_ITEMS[number]

export default function AboutItem ({Icon , title , description } : Items ) {
  return (
    <Card className="w-full lg:w-[40%] text-muted-foreground h-[150px]">
      <CardHeader >
        <div className="flex flex-wrap items-center gap-x-2">
            <Icon className="w-[10%] text-blue-800" />
            <h1 className="text-gray-800 font-medium dark:text-gray-400">{title}</h1>
        </div>
      </CardHeader>
      <CardContent>
        {description}
      </CardContent>
    </Card>
  )
}
