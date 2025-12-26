// Layout component provides the dark background and monospace font for the entire application
export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0D1117] text-gray-200 font-mono">
      {children}
    </div>
  );
}
