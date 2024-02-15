import LoginForm from "@/components/login/loginForm";

const Login = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-10 lg:px-6">
      <div className="rounded-2xl border border-tremor-border bg-white/5 p-5 shadow-tremor-dropdown backdrop-blur-sm sm:mx-auto sm:w-full sm:max-w-md">
        <h3 className="text-2xl  font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Login
        </h3>
        <LoginForm />
      </div>
      <div className="mt-4 space-y-3 border p-2 sm:mx-auto sm:w-full sm:max-w-md">
        <p className="text-xl font-bold">for login</p>
        <p>username: admin</p>
        <p>password: admin</p>
      </div>
    </div>
  );
};

export default Login;
