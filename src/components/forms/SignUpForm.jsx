import { useState } from "react";

// UI
import { Button, IconButton, Input } from "../ui";

// Icons
import {
  MdOutlineMail,
  MdVisibility,
  MdVisibilityOff,
  MdLogin,
} from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

const SignUpForm = ({ onSubmit, loading = false }) => {
  const [showPassword, setShowPassword] = useState(false);

  // Form
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
    }

    onSubmit(form).finally(() => {
      setForm({
        email: "",
        password: "",
        confirmPassword: "",
      });
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex min-w-sm flex-col gap-y-8">
      <Input
        type="email"
        name="email"
        label="Email"
        placeholder="example@gmail.com"
        startAdornment={<MdOutlineMail size={24} />}
        required
        value={form.email}
        onChange={handleChange}
      />
      <Input
        type={showPassword ? "text" : "password"}
        name="password"
        label="Create Password"
        placeholder="••••••••"
        startAdornment={<TbLockPassword size={24} />}
        endAdornment={
          <IconButton
            icon={showPassword ? <MdVisibility /> : <MdVisibilityOff />}
            onClick={() => setShowPassword(!showPassword)}
          />
        }
        minLength={8}
        maxLength={20}
        required
        value={form.password}
        onChange={handleChange}
      />
      <Input
        type={showPassword ? "text" : "password"}
        name="confirmPassword"
        label="Confirm Password"
        placeholder="••••••••"
        startAdornment={<TbLockPassword size={24} />}
        minLength={8}
        maxLength={20}
        required
        value={form.confirmPassword}
        onChange={handleChange}
      />
      <Button
        type={"submit"}
        text={loading ? "Loading..." : "Sign Up"}
        icon={!loading && <MdLogin size={24} />}
        disabled={loading}
      />
    </form>
  );
};

export default SignUpForm;
