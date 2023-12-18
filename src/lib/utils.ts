import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ACTIONS = "about" | "projects" | "Resume";

export interface SubComponentsProps {
  setAction: React.SetStateAction<ACTIONS>;
  action: ACTIONS;
}
