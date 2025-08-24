import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorPage } from "@Pages";
// import PublicRoutes from "./PublicRoutes";
import PrivateRouteMiddleware from "./Helper/PrivateRouteMiddleware";
import { Componentes, Login } from "@/Pages";

const RoutesPage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Componentes" element={<Componentes />} />
        <Route
          path="/admin"
          element={
            <PrivateRouteMiddleware
              user={{ logged: false, role: "admin" }}
              roleNeed="admin"
            >
              <div>Admin</div>
            </PrivateRouteMiddleware>
          }
        />

        <Route
          path="/user"
          element={
            <PrivateRouteMiddleware
              user={{ logged: true, role: "user" }}
              roleNeed="user"
            >
              <div>User</div>
            </PrivateRouteMiddleware>
          }
        />

        <Route
          path="/*"
          element={
            <ErrorPage
              errorCode={404}
              errorMessage="Página no encontrada"
              errorDetails="Lo sentimos, no pudimos encontrar la página que buscas."
            />
          }
        />
        <Route
          path="/unauthorized"
          element={
            <ErrorPage
              errorCode={403}
              errorMessage="Acceso denegado"
              errorDetails="No tienes permiso para acceder a esta página."
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default RoutesPage;
