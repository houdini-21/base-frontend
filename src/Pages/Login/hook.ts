import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "@Utils/validations";
import { useUserStore } from "@/Store/userStore";
import { toast } from "react-toastify";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    validateOnChange: true,
    onSubmit: (values) => {
      setIsLoading(true);
      setUser({
        id: "1",
        name: "John Doe",
        email: values.email,
        age: 30,
        role: "admin",
        isLoggedIn: true,
      });

      setTimeout(() => {
        toast.success("Login successful!");
        setIsLoading(false);
        navigate("/admin");
      }, 10000);
    },
  });

  return {
    formik,
    isLoading,
  };
};

export default useLogin;
