import { Navigate } from "react-router-dom";
interface PrivateRouteMiddlewareProps {
  children: React.ReactNode;
  user: {
    logged: boolean;
    role: string;
  };
  roleNeed: string | Array<string>;
}

const PrivateRouteMiddleware = ({
  children,
  user,
  roleNeed,
}: PrivateRouteMiddlewareProps) => {
  const auth = user.logged;
  const role = user.role;
  return auth &&
    (role === roleNeed ||
      (Array.isArray(roleNeed) && roleNeed.includes(role))) ? (
    children
  ) : (
    <Navigate to="/unauthorized" />
  );
};

export default PrivateRouteMiddleware;
