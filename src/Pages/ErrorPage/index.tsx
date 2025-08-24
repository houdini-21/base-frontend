import { useNavigate } from "react-router-dom";
import { Button } from "@/Components/atoms";
import type { ErrorPageProps } from "./interface";

export const ErrorPage = ({
  errorCode,
  errorMessage,
  errorDetails,
}: ErrorPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen grid place-items-center bg-white text-gray-800 px-6 py-16">
      <section className="w-full max-w-xl text-center">
        <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
          <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-red-600" />
          Codigo de error: {errorCode}
        </span>

        <h1 className="mt-6 text-6xl font-extrabold tracking-tight">
          {errorMessage}
        </h1>
        <p className="mt-3 text-gray-500">
          {errorDetails ||
            "Lo sentimos, no pudimos encontrar la página que buscas."}
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button onClick={() => navigate(-1)}>Volver atrás</Button>
        </div>
      </section>
    </div>
  );
};
