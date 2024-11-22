// Liskov Substitution Principle
export interface CustomInput
  extends React.InputHTMLAttributes<HTMLInputElement> {
  view: "secondary" | "primary";
  textLabel?: string;
}
