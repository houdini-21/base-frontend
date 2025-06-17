import type { ChildrenJsxProp, StylesProp } from '@Interfaces/Global.types';

interface CardProps extends ChildrenJsxProp, StylesProp {}

const Card = ({ children, styleClasses }: CardProps) => (
  <div className={`card ${styleClasses}`}>{children}</div>
);

export default Card;
