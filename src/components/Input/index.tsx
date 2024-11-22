import type { CustomInput } from "./types";

// Liskov Substitution Principle
export const Input = (props: CustomInput) => {
  const { textLabel, ...restProps } = props;

  return (
    <label>
      {textLabel && <h3>{textLabel}</h3>}
      <input
        {...restProps}
        className={props.view === "primary" ? "primary" : "secondary"}
      />
    </label>
  );
};
