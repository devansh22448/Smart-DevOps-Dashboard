import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaEnvelope, FaLock, FaGithubAlt } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthLayout from "../components/AuthLayout";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await login(formData.email, formData.password);

    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.message);
    }

    setLoading(false);
  };

  return (
    <AuthLayout>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#F7F9FA]">Sign In</h2>
        <p className="text-gray-400 mt-2 text-sm">Welcome back to DevOps Hub</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="auth-error">
            <span className="error-icon">⚠</span>
            {error}
          </div>
        )}

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <div className="input-wrapper">
            <span className="input-icon">
              <FaEnvelope />
            </span>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="name@company.com"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="input-wrapper">
            <span className="input-icon">
              <FaLock />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="••••••••"
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span className="checkmark"></span>
            <span className="checkbox-label">Remember me</span>
          </label>
          <Link to="/forgot-password" className="forgot-link text-sm">
            Forgot Password?
          </Link>
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={loading} className="btn-primary">
          {loading ? <span className="loading-spinner"></span> : "Sign In"}
        </button>

        {/* Divider */}
        <div className="divider">
          <span className="divider-text">or continue with</span>
        </div>

        {/* GitHub Button */}
        <button type="button" className="btn-secondary">
          <FaGithubAlt />
          <span>GitHub</span>
        </button>

        {/* Footer */}
        <div className="text-center pt-4">
          <p className="footer-text">
            Don't have an account?{" "}
            <Link to="/register" className="footer-link">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
