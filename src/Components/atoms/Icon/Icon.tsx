import type { IconProps } from './Icon.types';

const Icon = ({ name, color = 'white' }: IconProps) => {
  return <i className={`${name} text-5xl text-${color} mb-5`} />;
};

export default Icon;
