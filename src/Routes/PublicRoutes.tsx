import { Componentes } from "@/Pages";
import { Route, Routes } from "react-router-dom";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/componentes" element={<Componentes />} />
    </Routes>
  );
};

export default PublicRoutes;
