const Input = ({
  id,
  name,
  label,
  placeholder,
  type = "text",
  required = false,
  className,
  value,
  onChange,
  hidden = false,
  readOnly = false,
  startAdornment,
  endAdornment,
  ...rest
}) => {
  return (
    <label
      htmlFor={id || name}
      aria-label={label}
      className={`ring-primary group relative flex items-center gap-x-2 rounded-lg border border-gray-300 p-2 focus-within:border-0 focus-within:ring-2 ${className}`}
    >
      <span
        className={`invisible absolute -top-5 left-2 z-10 text-xs font-semibold group-focus-within:visible ${required && "after:content-['*']"}`}
      >
        {label}
      </span>
      {startAdornment && startAdornment}
      <input
        type={type}
        name={name}
        id={id || name}
        placeholder={placeholder}
        className="w-full outline-hidden"
        hidden={hidden}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        required={required}
        {...rest}
      />
      {endAdornment && endAdornment}
    </label>
  );
};

export default Input;
