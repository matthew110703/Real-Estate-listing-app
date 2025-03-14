import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// UI
import { Branding } from "../components/ui";

// Form
import { SignUpForm } from "../components/forms";

// Firebase
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

// Redux
import { useDispatch } from "react-redux";
import { setToast } from "../store/toastSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (form) => {
    const { email, password } = form;

    try {
      setLoading(true);
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log(userCred);

      // Success toast
      dispatch(
        setToast({ message: "Account created successfully!", type: "success" }),
      );

      // Redirect
      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      const errorCode = error.code;

      if (errorCode === "auth/email-already-in-use") {
        dispatch(
          setToast({ message: "This email is already in use.", type: "error" }),
        );
        return;
      }

      if (errorCode === "auth/invalid-email") {
        dispatch(
          setToast({ message: "Invalid email address.", type: "error" }),
        );
        return;
      }

      // Fallback error message
      dispatch(
        setToast({
          message: "An error occurred. Please try again.",
          type: "error",
        }),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex h-[90vh] flex-col items-center justify-center gap-y-8">
      <Branding />
      <SignUpForm onSubmit={handleSubmit} loading={loading} />

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
