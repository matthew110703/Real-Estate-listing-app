import { useState } from "react";

// UI
import { Button, Input, IconButton } from "../ui";

// Icons
import {
  MdOutlineMail,
  MdVisibility,
  MdVisibilityOff,
  MdLogin,
} from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

const LoginForm = ({ onSubmit, loading = false }) => {
  const [showPassword, setShowPassword] = useState(false);

  // Form
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(form).finally(() => {
      setForm({
        email: "",
        password: "",
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
        label="Password"
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
      <Button
        type={"submit"}
        text={loading ? "Loading..." : "Login"}
        icon={!loading && <MdLogin size={24} />}
        disabled={loading}
      />
    </form>
  );
};

export default LoginForm;
