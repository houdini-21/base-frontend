import type { IconProps } from "./Icon.types";

const Icon = ({ name, color = "white", size = "5xl" }: IconProps) => {
  return <i className={`${name} text-${size} text-${color} mb-5`} />;
};

export default Icon;
