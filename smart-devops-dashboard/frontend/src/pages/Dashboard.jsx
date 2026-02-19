import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-primary-dark">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-highlight-yellow">
            Smart DevOps Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="bg-accent-aqua hover:bg-soft-aqua-hover text-primary-dark font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Logout
          </button>
        </div>

        <div className="bg-card-bg rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Welcome, {user?.username}!
          </h2>
          <p className="text-text-secondary mb-6">
            This is your personal dashboard. Here you can manage your DevOps
            workflows, monitor deployments, and access various tools.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-primary-dark p-6 rounded-lg border border-text-secondary">
              <h3 className="text-lg font-semibold text-accent-aqua mb-2">
                Deployments
              </h3>
              <p className="text-text-secondary">
                Monitor and manage your application deployments.
              </p>
            </div>

            <div className="bg-primary-dark p-6 rounded-lg border border-text-secondary">
              <h3 className="text-lg font-semibold text-accent-aqua mb-2">
                CI/CD Pipelines
              </h3>
              <p className="text-text-secondary">
                View and control your continuous integration pipelines.
              </p>
            </div>

            <div className="bg-primary-dark p-6 rounded-lg border border-text-secondary">
              <h3 className="text-lg font-semibold text-accent-aqua mb-2">
                Monitoring
              </h3>
              <p className="text-text-secondary">
                Keep track of system performance and health metrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
