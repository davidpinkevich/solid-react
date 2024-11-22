import type { TErrorMessage } from "./types";

// Single Responsibility Principle
export const ErrorMessage = ({ error }: TErrorMessage) => {
  return <div className="error">{error}</div>;
};
