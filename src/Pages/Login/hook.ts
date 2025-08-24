import { useFormik } from "formik";

const useLogin = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(`Username: ${values.username}\nPassword: ${values.password}`);
    },
  });

  return {
    formik,
  };
};

export default useLogin;
