import classNames from 'classnames';

interface LoaderProps {
  size?: number;
  visible?: boolean;
  color?: string;
  className?: string;
}

const Loader = ({ size = 50, color = 'blue', className = '', visible = false }: LoaderProps) => (
  <div
    className={classNames('w-full h-full flex justify-center items-center', className, {
      hidden: !visible,
    })}
  >
    <i className={`fa-duotone fa-spinner-third fa-spin text-${color}`} style={{ fontSize: size }} />
  </div>
);

export default Loader;
