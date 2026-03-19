const AuthLayout = ({ children }) => {
  return (
    <div className="auth-page-container">
      {/* Animated Background */}
      <div className="auth-bg-animation">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
        <div className="grid-pattern"></div>
      </div>

      {/* Centered Auth Card */}
      <div className="auth-card-container">
        <div className="auth-card-glass animate-fade-in">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
