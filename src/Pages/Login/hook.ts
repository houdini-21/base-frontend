import { useFormik } from "formik";
import { loginSchema } from "@Utils/validations";

const useLogin = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    validateOnChange: true,
    onSubmit: (values) => {
      alert(`Email: ${values.email}\nPassword: ${values.password}`);
    },
  });

  return {
    formik,
  };
};

export default useLogin;
