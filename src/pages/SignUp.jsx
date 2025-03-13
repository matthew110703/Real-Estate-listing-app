import { Link } from "react-router-dom";

// UI
import { Branding } from "../components/ui";

// Form
import { SignUpForm } from "../components/forms";

const SignUp = () => {
  const handleSubmit = async (form) => {
    console.log(form);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Account created successfully");
  };

  return (
    <section className="flex h-[90vh] flex-col items-center justify-center gap-y-8">
      <Branding />
      <SignUpForm onSubmit={handleSubmit} />

      <p>
        Already have an account?{" "}
        <Link
          to="/"
          className="font-semibold underline-offset-2 hover:underline"
        >
          Login
        </Link>
      </p>
    </section>
  );
};

export default SignUp;
