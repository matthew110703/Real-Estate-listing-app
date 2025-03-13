const IconButton = ({ icon, className, onClick, hidden, ...rest }) => {
  return (
    <button
      className={`hover:bg-primary/15 rounded-full p-1.5 shadow-sm transition-all duration-150 ${className}`}
      onClick={onClick}
      hidden={hidden}
      {...rest}
    >
      {icon}
    </button>
  );
};

export default IconButton;
