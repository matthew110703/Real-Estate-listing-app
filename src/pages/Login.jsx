import { Link } from "react-router-dom";

// UI
import { Button, Input, Branding } from "../components/ui";

// Form
import { LoginForm } from "../components/forms";

const Login = () => {
  const handleSubmit = async (form) => {
    console.log(form);
  };

  return (
    <section className="flex h-[90vh] flex-col items-center justify-center gap-y-8">
      <Branding />
      <LoginForm onSubmit={handleSubmit} />
      <p>
        Already have an account?{" "}
        <Link
          to="/signup"
          className="font-semibold underline-offset-2 hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </section>
  );
};

export default Login;
