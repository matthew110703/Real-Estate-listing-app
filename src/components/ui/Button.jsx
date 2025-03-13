const Button = ({
  type,
  text,
  icon,
  onClick,
  className,
  disabled = false,
  hidden = false,
  ...rest
}) => {
  return (
    <button
      aria-label={text}
      type={type}
      onClick={onClick}
      className={`bg-primary flex transform items-center gap-x-2 rounded-lg px-4 py-2 text-sm tracking-wide text-white shadow shadow-gray-400 transition duration-300 ease-out hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
      disabled={disabled}
      hidden={hidden}
      {...rest}
    >
      {icon && <span className="m-0">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
