import { BoxShadow, Button, InputText } from "@Components/atoms";
import useLogin from "./hook";

export const Login = () => {
  const { formik } = useLogin();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <BoxShadow
        padding="8"
        marginBottom="0"
        styleClasses="w-full max-w-md p-8"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={formik.handleSubmit} className="grid gap-5">
          <InputText
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.email && formik.errors.email)}
            errorMessage={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""
            }
            icon="fas fa-user"
          />
          <InputText
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.password && formik.errors.password)}
            errorMessage={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""
            }
            icon="fas fa-lock"
          />
          <Button variant="primary" isSubmit styleClasses="w-full">
            Login
          </Button>
        </form>
      </BoxShadow>
    </div>
  );
};
