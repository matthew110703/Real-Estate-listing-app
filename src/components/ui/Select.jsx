const Select = ({ name, label, options, value, onChange, className }) => {
  return (
    <label htmlFor={name} className="flex flex-col gap-y-1">
      <span className="text-xs font-semibold">{label}</span>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={`rounded-lg border p-2 text-sm font-semibold ${className}`}
      >
        {options.map((option, index) => (
          <option key={index} value={option?.value} className="rounded-lg">
            {option?.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
