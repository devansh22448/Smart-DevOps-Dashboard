const AuthCard = ({ children, className = "" }) => {
  return (
    <div className={`auth-card-container ${className}`}>
      <div className="auth-card-glass">{children}</div>
    </div>
  );
};

export default AuthCard;
