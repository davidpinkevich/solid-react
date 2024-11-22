import type { TButton } from "./types";

// Open Closed Principle
export const Button = ({ children, className, onClick }: TButton) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
