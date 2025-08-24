import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useUserStore } from "@/Store/userStore";
import PrivateRouteMiddleware from "./Helper/PrivateRouteMiddleware";
import { Componentes, Login, ErrorPage } from "@/Pages";

const RoutesPage = () => {
  const { user, clearUser } = useUserStore();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Componentes" element={<Componentes />} />
        <Route
          path="/admin"
          element={
            <PrivateRouteMiddleware
              user={{
                logged: user.isLoggedIn,
                role: user.role,
              }}
              roleNeed="admin"
            >
              <div>
                <h1>Admin</h1>
                <p>Welcome to the admin panel.</p>
                <button onClick={() => clearUser()}>Admin Action</button>
              </div>
            </PrivateRouteMiddleware>
          }
        />

        <Route
          path="/user"
          element={
            <PrivateRouteMiddleware
              user={{ logged: false, role: "user" }}
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
