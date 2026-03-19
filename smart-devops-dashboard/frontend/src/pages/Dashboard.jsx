import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import {
  LayoutDashboard,
  Rocket,
  FileText,
  Settings,
  Activity,
  CheckCircle,
  XCircle,
  Clock,
  Terminal,
  TrendingUp,
  PieChart,
  ChevronRight,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPie,
  Pie,
  Cell,
  Legend,
} from "recharts";

// Logo Component
const Logo = ({ size = "md" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  return (
    <div
      className={`${sizeClasses[size]} relative flex items-center justify-center`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/20 to-accent-yellow/20 rounded-2xl animate-pulse" />
      <div className="relative w-full h-full flex items-center justify-center">
        <span
          className="text-3xl font-bold text-accent-teal"
          style={{ textShadow: "0 0 20px rgba(58, 175, 169, 0.5)" }}
        >
          ∞
        </span>
      </div>
    </div>
  );
};

// Sidebar Component
const Sidebar = ({ activeItem, setActiveItem }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "deployments", label: "Deployments", icon: Rocket },
    { id: "logs", label: "Logs", icon: FileText },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-secondary-dark/95 to-primary-bg/95 backdrop-blur-xl border-r border-accent-teal/20 z-40 flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-accent-teal/10">
        <div className="flex items-center gap-3">
          <Logo size="md" />
          <div>
            <h1 className="text-lg font-bold text-text-primary">
              Smart DevOps
            </h1>
            <p className="text-xs text-text-secondary">Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveItem(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                    isActive
                      ? "bg-accent-teal/20 text-accent-teal shadow-[0_0_20px_rgba(58,175,169,0.3)] border border-accent-teal/30"
                      : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
                  }`}
                >
                  <Icon
                    size={20}
                    className={
                      isActive
                        ? "text-accent-teal"
                        : "group-hover:text-accent-teal transition-colors"
                    }
                  />
                  <span className="font-medium">{item.label}</span>
                  {isActive && (
                    <ChevronRight
                      size={16}
                      className="ml-auto text-accent-teal"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-accent-teal/10">
        <div className="bg-gradient-to-r from-accent-teal/10 to-accent-yellow/10 rounded-xl p-4 border border-accent-teal/20">
          <div className="flex items-center gap-2 text-accent-teal mb-2">
            <Activity size={16} />
            <span className="text-sm font-medium">System Status</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
            <span className="text-xs text-text-secondary">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

// Stats Card Component
const StatsCard = ({ title, value, label, color, icon: Icon }) => {
  const colorClasses = {
    yellow: {
      bg: "bg-accent-yellow/10",
      text: "text-accent-yellow",
      border: "border-accent-yellow/30",
      glow: "hover:shadow-[0_0_30px_rgba(255,209,102,0.3)]",
      icon: "text-accent-yellow",
    },
    green: {
      bg: "bg-accent-green/10",
      text: "text-accent-green",
      border: "border-accent-green/30",
      glow: "hover:shadow-[0_0_30px_rgba(46,204,113,0.3)]",
      icon: "text-accent-green",
    },
    red: {
      bg: "bg-accent-red/10",
      text: "text-accent-red",
      border: "border-accent-red/30",
      glow: "hover:shadow-[0_0_30px_rgba(230,57,70,0.3)]",
      icon: "text-accent-red",
    },
    teal: {
      bg: "bg-accent-teal/10",
      text: "text-accent-teal",
      border: "border-accent-teal/30",
      glow: "hover:shadow-[0_0_30px_rgba(58,175,169,0.3)]",
      icon: "text-accent-teal",
    },
  };

  const styles = colorClasses[color] || colorClasses.teal;

  return (
    <div
      className={`group relative bg-card-surface/80 backdrop-blur-sm rounded-2xl p-6 border ${styles.border} transition-all duration-300 hover:scale-[1.02] ${styles.glow} overflow-hidden`}
    >
      <div
        className={`absolute top-0 right-0 w-32 h-32 ${styles.bg} rounded-full -translate-y-1/2 translate-x-1/2 opacity-50`}
      />
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-text-secondary text-sm font-medium">{title}</h3>
          <div className={`p-2 ${styles.bg} rounded-lg`}>
            <Icon size={20} className={styles.icon} />
          </div>
        </div>
        <div className={`text-4xl font-bold ${styles.text} mb-1`}>{value}</div>
        <div className={`text-sm ${styles.text} opacity-80`}>{label}</div>
      </div>
    </div>
  );
};

// Log Entry Component
const LogEntry = ({ type, message, timestamp }) => {
  const typeStyles = {
    INFO: {
      color: "text-accent-teal",
      bg: "bg-accent-teal/10",
      border: "border-accent-teal/30",
    },
    SUCCESS: {
      color: "text-accent-green",
      bg: "bg-accent-green/10",
      border: "border-accent-green/30",
    },
    ERROR: {
      color: "text-accent-red",
      bg: "bg-accent-red/10",
      border: "border-accent-red/30",
    },
    WARNING: {
      color: "text-accent-yellow",
      bg: "bg-accent-yellow/10",
      border: "border-accent-yellow/30",
    },
  };

  const style = typeStyles[type] || typeStyles.INFO;

  return (
    <div className="flex items-start gap-3 py-2 px-3 rounded-lg hover:bg-white/5 transition-colors animate-fade-in">
      <span className="text-xs text-text-secondary font-mono mt-0.5 shrink-0 w-20">
        {timestamp}
      </span>
      <span
        className={`px-2 py-0.5 text-xs font-medium rounded ${style.bg} ${style.color} border ${style.border}`}
      >
        {type}
      </span>
      <span className="text-text-primary font-mono text-sm">{message}</span>
    </div>
  );
};

// Logs Panel Component
const LogsPanel = () => {
  const [logs, setLogs] = useState([
    {
      id: 1,
      type: "INFO",
      message: "Initializing deployment pipeline...",
      timestamp: "10:42:01",
    },
    {
      id: 2,
      type: "INFO",
      message: "Loading configuration from config.yaml",
      timestamp: "10:42:02",
    },
    {
      id: 3,
      type: "SUCCESS",
      message: "Connected to Kubernetes cluster",
      timestamp: "10:42:05",
    },
    {
      id: 4,
      type: "INFO",
      message: "Pulling latest images from registry",
      timestamp: "10:42:08",
    },
    {
      id: 5,
      type: "SUCCESS",
      message: "Image pulled successfully: app:v2.1.0",
      timestamp: "10:42:15",
    },
    {
      id: 6,
      type: "INFO",
      message: "Running pre-deployment checks",
      timestamp: "10:42:18",
    },
    {
      id: 7,
      type: "SUCCESS",
      message: "All health checks passed",
      timestamp: "10:42:22",
    },
    {
      id: 8,
      type: "INFO",
      message: "Starting rolling update...",
      timestamp: "10:42:25",
    },
    {
      id: 9,
      type: "WARNING",
      message: "High memory usage detected on node-03",
      timestamp: "10:42:28",
    },
    {
      id: 10,
      type: "SUCCESS",
      message: "Pod app-7b9f5d4-x2k8m ready",
      timestamp: "10:42:35",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLogs = [
        {
          type: "INFO",
          message: "Processing deployment request...",
          timestamp: new Date().toLocaleTimeString("en-US", { hour12: false }),
        },
        {
          type: "SUCCESS",
          message: "Health check passed for service mesh",
          timestamp: new Date().toLocaleTimeString("en-US", { hour12: false }),
        },
        {
          type: "INFO",
          message: "Scaling deployment to 3 replicas",
          timestamp: new Date().toLocaleTimeString("en-US", { hour12: false }),
        },
      ];

      setLogs((prev) => [...newLogs, ...prev].slice(0, 15));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card-surface/80 backdrop-blur-sm rounded-2xl border border-accent-teal/20 overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-accent-teal/10">
        <div className="flex items-center gap-3">
          <Terminal size={20} className="text-accent-teal" />
          <h3 className="text-text-primary font-semibold">
            Live Deployment Logs
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
          <span className="text-xs text-text-secondary">Live</span>
        </div>
      </div>
      <div className="p-4 h-64 overflow-y-auto font-mono text-sm scrollbar-thin scrollbar-thumb-accent-teal/30 scrollbar-track-transparent">
        {logs.map((log) => (
          <LogEntry key={log.id} {...log} />
        ))}
      </div>
    </div>
  );
};

// Deployment History Table
const DeploymentTable = () => {
  const deployments = [
    {
      id: 1,
      service: "api-gateway",
      version: "v2.1.0",
      environment: "Production",
      startTime: "2024-03-19 10:30",
      status: "SUCCESS",
    },
    {
      id: 2,
      service: "auth-service",
      version: "v1.8.5",
      environment: "Staging",
      startTime: "2024-03-19 10:15",
      status: "RUNNING",
    },
    {
      id: 3,
      service: "user-service",
      version: "v3.2.1",
      environment: "Production",
      startTime: "2024-03-19 09:45",
      status: "SUCCESS",
    },
    {
      id: 4,
      service: "payment-service",
      version: "v2.0.0",
      environment: "Production",
      startTime: "2024-03-19 09:30",
      status: "FAILED",
    },
    {
      id: 5,
      service: "notification-svc",
      version: "v1.5.2",
      environment: "Development",
      startTime: "2024-03-19 09:00",
      status: "SUCCESS",
    },
    {
      id: 6,
      service: "analytics-core",
      version: "v4.1.0",
      environment: "Staging",
      startTime: "2024-03-18 18:20",
      status: "SUCCESS",
    },
  ];

  const statusStyles = {
    SUCCESS: {
      bg: "bg-accent-green/20",
      text: "text-accent-green",
      border: "border-accent-green/30",
    },
    FAILED: {
      bg: "bg-accent-red/20",
      text: "text-accent-red",
      border: "border-accent-red/30",
    },
    RUNNING: {
      bg: "bg-accent-yellow/20",
      text: "text-accent-yellow",
      border: "border-accent-yellow/30",
    },
  };

  return (
    <div className="bg-card-surface/80 backdrop-blur-sm rounded-2xl border border-accent-teal/20 overflow-hidden">
      <div className="p-4 border-b border-accent-teal/10">
        <h3 className="text-text-primary font-semibold flex items-center gap-2">
          <Clock size={20} className="text-accent-teal" />
          Deployment History
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-secondary-dark/50">
              <th className="text-left p-4 text-text-secondary text-sm font-medium">
                Service
              </th>
              <th className="text-left p-4 text-text-secondary text-sm font-medium">
                Version
              </th>
              <th className="text-left p-4 text-text-secondary text-sm font-medium">
                Environment
              </th>
              <th className="text-left p-4 text-text-secondary text-sm font-medium">
                Start Time
              </th>
              <th className="text-left p-4 text-text-secondary text-sm font-medium">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {deployments.map((deployment, index) => {
              const style = statusStyles[deployment.status];
              return (
                <tr
                  key={deployment.id}
                  className="border-t border-accent-teal/10 hover:bg-white/5 transition-colors"
                >
                  <td className="p-4 text-text-primary font-medium">
                    {deployment.service}
                  </td>
                  <td className="p-4 text-text-secondary font-mono text-sm">
                    {deployment.version}
                  </td>
                  <td className="p-4 text-text-secondary">
                    {deployment.environment}
                  </td>
                  <td className="p-4 text-text-secondary text-sm">
                    {deployment.startTime}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${style.bg} ${style.text} ${style.border}`}
                    >
                      {deployment.status === "SUCCESS" && (
                        <CheckCircle size={12} className="inline mr-1" />
                      )}
                      {deployment.status === "FAILED" && (
                        <XCircle size={12} className="inline mr-1" />
                      )}
                      {deployment.status === "RUNNING" && (
                        <Clock size={12} className="inline mr-1" />
                      )}
                      {deployment.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const { user, logout } = useAuth();
  const [activeItem, setActiveItem] = useState("dashboard");

  // Sample data for charts
  const lineChartData = [
    { name: "Mon", deployments: 12 },
    { name: "Tue", deployments: 19 },
    { name: "Wed", deployments: 15 },
    { name: "Thu", deployments: 22 },
    { name: "Fri", deployments: 18 },
    { name: "Sat", deployments: 8 },
    { name: "Sun", deployments: 5 },
  ];

  const pieChartData = [
    { name: "Success", value: 85, color: "#2ECC71" },
    { name: "Failed", value: 15, color: "#E63946" },
  ];

  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-teal/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-yellow/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-accent-teal/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Sidebar */}
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      {/* Main Content */}
      <main className="ml-64 p-8 relative z-10">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-text-primary mb-2">
                Smart DevOps Dashboard
              </h1>
              <p className="text-text-secondary">
                Welcome back,{" "}
                <span className="text-accent-teal">
                  {user?.username || "Admin"}
                </span>
              </p>
            </div>
            <button
              onClick={logout}
              className="px-6 py-2.5 bg-accent-teal/10 text-accent-teal rounded-xl border border-accent-teal/30 hover:bg-accent-teal/20 transition-all duration-300 font-medium"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Stats Cards */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard
              title="Deployment Status"
              value="12"
              label="Running"
              color="yellow"
              icon={Activity}
            />
            <StatsCard
              title="Success Rate"
              value="85"
              label="Successful Deployments"
              color="green"
              icon={CheckCircle}
            />
            <StatsCard
              title="Failed Deployments"
              value="3"
              label="Failed"
              color="red"
              icon={XCircle}
            />
          </div>
        </section>

        {/* Logs Panel */}
        <section className="mb-8">
          <LogsPanel />
        </section>

        {/* Metrics Section */}
        <section className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Line Chart */}
            <div className="bg-card-surface/80 backdrop-blur-sm rounded-2xl border border-accent-teal/20 p-6">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp size={20} className="text-accent-teal" />
                <h3 className="text-text-primary font-semibold">
                  Deployment Frequency
                </h3>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineChartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#3AAFA9/20" />
                    <XAxis dataKey="name" stroke="#9FB3B6" fontSize={12} />
                    <YAxis stroke="#9FB3B6" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1E1E1E",
                        border: "1px solid #3AAFA9/30",
                        borderRadius: "8px",
                        color: "#F7F9FA",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="deployments"
                      stroke="#3AAFA9"
                      strokeWidth={3}
                      dot={{ fill: "#3AAFA9", strokeWidth: 2 }}
                      activeDot={{ r: 6, fill: "#FFD166" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Pie Chart */}
            <div className="bg-card-surface/80 backdrop-blur-sm rounded-2xl border border-accent-teal/20 p-6">
              <div className="flex items-center gap-2 mb-6">
                <PieChart size={20} className="text-accent-teal" />
                <h3 className="text-text-primary font-semibold">
                  Success vs Failure
                </h3>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPie>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1E1E1E",
                        border: "1px solid #3AAFA9/30",
                        borderRadius: "8px",
                        color: "#F7F9FA",
                      }}
                    />
                    <Legend
                      verticalAlign="bottom"
                      height={36}
                      formatter={(value) => (
                        <span className="text-text-primary text-sm">
                          {value}
                        </span>
                      )}
                    />
                  </RechartsPie>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment History */}
        <section>
          <DeploymentTable />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
