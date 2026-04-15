import { useAuth } from "../context/AuthContext";
import logo from "../assets/icon.jpeg";

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-primary-dark font-sans text-text-primary selection:bg-accent-aqua selection:text-primary-dark">
      {/* Top Navbar */}
      <nav className="border-b border-gray-800 bg-[#081b1f]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Smart DevOps Logo" className="w-12 h-auto" />
            <div className="flex flex-col">
              <h1 className="text-2xl font-black">
                <span className="text-highlight-yellow">Smart</span>{" "}
                <span className="text-accent-aqua">DevOps</span>{" "}
                <span className="text-text-primary">Dashboard</span>
              </h1>
              <span className="text-[0.65rem] tracking-[0.3em] font-semibold text-text-secondary mt-1">
                OPERATIONS CONTROL CENTER
              </span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="bg-accent-aqua hover:bg-soft-aqua-hover text-primary-dark font-bold py-2.5 px-6 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(58,175,169,0.3)] hover:shadow-[0_0_25px_rgba(102,210,199,0.5)]"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* Welcome Section */}
        <div className="bg-gradient-to-br from-card-bg to-[#0a2024] rounded-2xl shadow-lg border border-gray-700/40 p-10 mb-8 relative overflow-hidden">
          {/* subtle decorative blur highlight */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-aqua/5 blur-[100px] rounded-full pointer-events-none"></div>

          <h2 className="text-3xl font-extrabold text-text-primary mb-4 block relative z-10">
            Welcome, {user?.username || "Devansh Mishra"}!
          </h2>
          <p className="text-accent-aqua/80 text-lg max-w-3xl relative z-10 font-medium">
            This is your personal dashboard. Here you can manage your DevOps
            workflows, monitor deployments, and access various tools.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1: Deployments */}
          <div className="bg-gradient-to-br from-card-bg to-[#0a2024] p-8 rounded-2xl border border-gray-700/40 hover:border-accent-aqua/50 transition-all duration-300 group shadow-md hover:shadow-[0_10px_30px_rgba(58,175,169,0.1)]">
            <div className="text-3xl mb-5 pb-4 transition-transform duration-300 group-hover:-translate-y-1">
              🚀
            </div>
            <h3 className="text-xl font-bold text-accent-aqua mb-3">
              Deployments
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Monitor and manage your application deployments.
            </p>
          </div>

          {/* Card 2: CI/CD Pipelines */}
          <div className="bg-gradient-to-br from-card-bg to-[#0a2024] p-8 rounded-2xl border border-gray-700/40 hover:border-accent-aqua/50 transition-all duration-300 group shadow-md hover:shadow-[0_10px_30px_rgba(58,175,169,0.1)]">
            <div className="text-3xl mb-5 pb-4 transition-transform duration-300 group-hover:-translate-y-1">
              ⚙️
            </div>
            <h3 className="text-xl font-bold text-accent-aqua mb-3">
              CI/CD Pipelines
            </h3>
            <p className="text-text-secondary leading-relaxed">
              View and control your continuous integration pipelines.
            </p>
          </div>

          {/* Card 3: Monitoring */}
          <div className="bg-gradient-to-br from-card-bg to-[#0a2024] p-8 rounded-2xl border border-gray-700/40 hover:border-accent-aqua/50 transition-all duration-300 group shadow-md hover:shadow-[0_10px_30px_rgba(58,175,169,0.1)]">
            <div className="text-3xl mb-5 pb-4 transition-transform duration-300 group-hover:-translate-y-1">
              📊
            </div>
            <h3 className="text-xl font-bold text-accent-aqua mb-3">
              Monitoring
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Keep track of system performance and health metrics.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;
