import { ReactNode } from "react";
// Interface Segregation Principle
export type TButton = {
  children: ReactNode;
  className: string;
  onClick: () => void;
};
