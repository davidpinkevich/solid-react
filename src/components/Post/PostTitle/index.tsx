import { TPostTitle } from "./types";

// Single Responsibility Principle
// Interface Segregation Principle
export const PostTitle = ({ title }: TPostTitle) => {
  return <h2>{title}</h2>;
};
