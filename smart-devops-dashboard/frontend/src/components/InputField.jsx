import { forwardRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputField = forwardRef(({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  icon: Icon,
  error,
  required = false,
  showPasswordToggle = false,
  showPassword,
  onTogglePassword,
  className = ""
}, ref) => {
  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
          {required && <span className="text-accent-red ml-1">*</span>}
        </label>
      )}
      <div className="input-wrapper">
        {Icon && (
          <span className="input-icon">
            <Icon />
          </span>
        )}
        <input
          ref={ref}
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`form-input ${error ? "form-input-error" : ""}`}
        />
        {showPasswordToggle && (
          <button
            type="button"
            className="password-toggle"
            onClick={onTogglePassword}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
      {error && (
        <span className="error-text">{error}</span>
      )}
    </div>
  );
});

InputField.displayName = "InputField";

export default InputField;
