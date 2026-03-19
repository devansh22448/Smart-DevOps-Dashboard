import { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      type = "button",
      children,
      onClick,
      disabled = false,
      loading = false,
      variant = "primary",
      className = "",
      icon: Icon,
    },
    ref,
  ) => {
    const baseClasses = "auth-button";

    const variantClasses = {
      primary: "bg-accent-teal hover:bg-soft-aqua-hover text-primary-dark",
      secondary:
        "bg-secondary-dark border border-accent-teal/30 text-text-primary hover:border-accent-teal/60",
      danger: "bg-accent-red hover:bg-red-600 text-white",
    };

    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled || loading}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        {loading ? (
          <span className="loading-spinner"></span>
        ) : (
          <>
            {Icon && <Icon className="button-icon" />}
            {children}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
