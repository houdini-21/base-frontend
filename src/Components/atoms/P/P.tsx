import type { PProps } from './P.types';

const P = ({
  children,
  styleClasses,
  color = 'blue',
  align = 'left',
  type = 'normal',
  fontSize = 'sm',
}: PProps) => {
  const classesNames = `text-${color} text-${align} ${styleClasses} font-${type} text-${fontSize}`;

  return <p className={classesNames}>{children}</p>;
};

export default P;
