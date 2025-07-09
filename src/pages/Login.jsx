import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/routePaths";
import { useLoginUserMutation } from "../store/slices/authSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// Yup schema
const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (formData) => {
    try {
      const { data } = await loginUser(formData).unwrap();

      // Save token to localStorage
      // localStorage.setItem("authToken", data.token);
      // localStorage.setItem("authUser", JSON.stringify(data.user));

      // toast.success("Login successful");
      navigate(ROUTES.home);
    } catch (error) {
      console.log('error=>', error)
      // toast.error(error?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm p-6 bg-white rounded shadow"
      >
        <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            {...register("password")}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
