"use client"
 
import * as React from "react"
 
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
 
interface ProgressProps {
    final_progress : number ;
    init_progress? : number ;
    content ?: string ;
    className?:string ;
}

export function ProgressDemo({final_progress , init_progress , className , content} :ProgressProps ) {
  const [progress, setProgress] = React.useState(init_progress || 13)
 
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(final_progress), 500)
    return () => clearTimeout(timer)
  }, [])
 
  return <Progress value={progress} className={cn(className ? className : "w-[150px]")} content={content} />
}