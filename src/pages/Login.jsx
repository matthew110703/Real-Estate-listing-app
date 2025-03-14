import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// UI
import { Branding } from "../components/ui";

// Form
import { LoginForm } from "../components/forms";

// Firebase
import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

// Redux
import { useDispatch } from "react-redux";
import { setToast } from "../store/toastSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (form) => {
    console.log(form);

    const { email, password } = form;

    try {
      setLoading(true);
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCred);

      // Success toast
      dispatch(
        setToast({ message: "Logged in successfully!", type: "success" }),
      );

      // Redirect
      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      const errorCode = error.code; // Use error.code instead of message

      if (errorCode === "auth/user-not-found") {
        dispatch(
          setToast({
            message: "User not found. Please sign up.",
            type: "error",
          }),
        );
        navigate("/signup");
        return; // Prevents executing the generic error message
      }

      if (
        errorCode === "auth/wrong-password" ||
        errorCode === "auth/invalid-credential"
      ) {
        dispatch(
          setToast({
            message: "Invalid credentials. Please try again.",
            type: "error",
          }),
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
      <LoginForm onSubmit={handleSubmit} loading={loading} />
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
