import { Link } from "react-router-dom";
import classNames from "classnames";
import type { ButtonProps } from "./Button.types";

const Button = ({
  children,
  styleClasses = "",
  variant = "primary",
  isSubmit = false,
  onClick,
  disabled = false,
  isLoading = false,
  startIcon,
  endIcon,
  path,
}: ButtonProps) => {
  return path ? (
    <Link
      to={path}
      className={classNames(
        "px-4 py-2 rounded-xl w-full transition-colors duration-300 text-sm leading-6 font-semibold h-10 text-center inline-block cursor-pointer",
        styleClasses,
        {
          "bg-blue-500 hover:bg-blue-600 text-white": variant === "primary",
          "border border-blue-500 text-blue-500 hover:bg-blue-100":
            variant === "secondary",
          "bg-red-500 hover:bg-red-600 text-white": variant === "danger",
          "cursor-wait": isLoading,
          "opacity-50 cursor-not-allowed": disabled,
        }
      )}
    >
      {isLoading ? (
        <i className="fa-duotone fa-spinner-third fa-spin text-lg" />
      ) : (
        <>
          {startIcon && <i className={`${startIcon} mr-2`} />}
          {children}
          {endIcon && <i className={`${endIcon} ml-2`} />}
        </>
      )}
    </Link>
  ) : (
    <button
      type={isSubmit ? "submit" : "button"}
      className={classNames(
        "px-4 py-2 cursor-pointer rounded-xl w-full transition-colors duration-300 text-sm font-semibold h-10 leading-5",
        styleClasses,
        {
          "bg-blue-500 hover:bg-blue-600 text-white": variant === "primary",
          "border border-blue-500 text-blue-500 hover:bg-blue-100":
            variant === "secondary",
          "bg-red-500 hover:bg-red-600 text-white": variant === "danger",
          "cursor-wait": isLoading,
          "opacity-50 cursor-not-allowed": disabled,
        }
      )}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <i className="fa-duotone fa-spinner-third fa-spin text-lg" />
      ) : (
        <>
          {startIcon && <i className={`${startIcon} mr-2`} />}
          {children}
          {endIcon && <i className={`${endIcon} ml-2`} />}
        </>
      )}
    </button>
  );
};

export default Button;
