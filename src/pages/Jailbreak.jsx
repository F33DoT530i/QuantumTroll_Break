import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ShieldCheck, Terminal, Zap, Power, AlertTriangle } from 'lucide-react';

// --- Components ---

// Component to display the scrolling log output
const LogOutput = ({ logs }) => {
  const endOfLogsRef = useRef(null);

  useEffect(() => {
    // Scrolls to the bottom of the log as new entries are added
    endOfLogsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div className="w-full h-64 bg-black bg-opacity-50 rounded-lg p-4 overflow-y-auto border border-gray-700 shadow-inner">
      <Terminal className="w-5 h-5 text-cyan-400 inline-block mr-2" />
      <span className="text-cyan-400">QuantumBreak v1.0b Log</span>
      <div className="mt-2">
        {logs.map((log, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: i * 0.05 }}
            className={`text-sm whitespace-pre-wrap ${log.type === 'error' ? 'text-red-400' : 'text-green-400'}`}
          >
            <span className="text-gray-500 mr-2">&gt;</span>{log.message}
          </motion.p>
        ))}
        {/* Fixed: Changed ref__ to ref (was a bug in original code) */}
        <div ref={endOfLogsRef} />
      </div>
    </div>
  );
};

// Component to display the progress bar
const ProgressBar = ({ progress }) => (
  <div className="w-full bg-gray-700 rounded-full h-2.5 my-4">
    <motion.div
      className="bg-green-500 h-2.5 rounded-full shadow-[0_0_10px_rgba(57,211,83,0.7)]"
      initial={{ width: '0%' }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    />
  </div>
);

// Component for the success modal that appears after the simulation
const SuccessModal = ({ onReset }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
  >
    <div className="bg-[#161B22] border border-green-500 rounded-lg p-8 text-center shadow-2xl shadow-green-500/20 max-w-md">
      <ShieldCheck className="w-16 h-16 text-green-400 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-white mb-2">Simulation Complete</h2>
      <p className="text-gray-400 mb-6">
        <AlertTriangle className="w-4 h-4 inline-block mr-2 text-yellow-400" />
        This is a visual demonstration. No changes have been made to any device. TrollStore has <span className="font-bold text-yellow-300">not</span> been installed.
      </p>
      <button
        onClick={onReset}
        className="bg-green-500 text-black font-bold py-2 px-6 rounded-lg hover:bg-green-400 transition-all duration-300 shadow-[0_0_15px_rgba(57,211,83,0.5)]"
      >
        Run Again
      </button>
    </div>
  </motion.div>
);

// --- Main Page Component ---

export default function JailbreakPage() {
  // State variables to manage the simulation
  const [isProcessing, setIsProcessing] = useState(false); // True when simulation is running
  const [logs, setLogs] = useState([{ message: "Waiting for user to initiate process..."}]); // Array of log messages
  const [progress, setProgress] = useState(0); // Progress percentage
  const [status, setStatus] = useState("Ready to Begin"); // Current status message
  const [isComplete, setIsComplete] = useState(false); // True when simulation is finished

  // Define the steps of the simulated jailbreak process
  const jailbreakSteps = [
    { log: "Initializing QuantumBreak exploit chain...", status: "Initializing...", duration: 1000, progress: 5 },
    { log: "Connecting to device (iPhone 15 Pro Max)...", status: "Connecting...", duration: 1500, progress: 15 },
    { log: "Firmware detected: iOS 17.6 (21F79)", status: "Identifying Firmware...", duration: 500, progress: 20 },
    { log: "Kernel version: Darwin Kernel Version 23.5.0", status: "Analyzing Kernel...", duration: 1000, progress: 30 },
    { log: "Injecting k-pac bypass payload...", status: "Bypassing PAC...", duration: 2000, progress: 50 },
    { log: "Root privileges acquired. Remounting /system as R/W...", status: "Gaining Root Access...", duration: 1500, progress: 75 },
    { log: "Patching AMFI and CoreTrust...", status: "Patching Core Services...", duration: 2000, progress: 90 },
    { log: "Installing TrollStore helper package...", status: "Installing TrollStore...", duration: 1500, progress: 99 },
    { log: "Jailbreak successful. Cleaning up...", status: "Finalizing...", duration: 1000, progress: 100 },
  ];

  // Function to start the simulation
  const startJailbreak = () => {
    setIsProcessing(true);
    setLogs([]); // Clear previous logs
    setProgress(0);
    setStatus("Starting...");

    let cumulativeDelay = 0;
    // Iterate through each step and set a timeout to simulate the process
    jailbreakSteps.forEach(step => {
      setTimeout(() => {
        setLogs(prev => [...prev, { message: step.log }]); // Add log entry
        setStatus(step.status); // Update status message
        setProgress(step.progress); // Update progress bar
      }, cumulativeDelay);
      cumulativeDelay += step.duration; // Accumulate delay for sequential execution
    });

    // After all steps, set the simulation as complete
    setTimeout(() => {
      setIsComplete(true);
      setStatus("Jailbreak Successful!");
    }, cumulativeDelay);
  };

  // Function to reset the simulation to its initial state
  const resetState = () => {
    setIsProcessing(false);
    setIsComplete(false);
    setProgress(0);
    setLogs([{ message: "System rebooted. Waiting for user to initiate process..."}]);
    setStatus("Ready to Begin");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-3xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-8">
          <Zap className="w-16 h-16 mx-auto text-cyan-400 mb-2 drop-shadow-[0_0_8px_rgba(0,184,212,0.7)]" />
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
            QuantumBreak
          </h1>
          <p className="text-cyan-300">iOS 17.6 Jailbreak Simulator</p>
        </header>

        {/* Main Content Area */}
        <main className="bg-[#161B22] border border-gray-700 rounded-xl p-6 md:p-8 space-y-6 shadow-2xl shadow-cyan-500/10">
          
          {/* Device and Status Display */}
          <div className="flex justify-between items-center text-sm border-b border-gray-700 pb-4">
            <div className="flex items-center gap-2">
              <Cpu className="text-gray-400" /> <span>Device: <strong>iPhone 15 Pro Max</strong></span>
            </div>
            <div className="flex items-center gap-2">
              Status: <span className="font-bold text-cyan-400">{status}</span>
            </div>
          </div>
          
          {/* Log Output Component */}
          <LogOutput logs={logs} />
          
          {/* Progress Bar Component */}
          <ProgressBar progress={progress} />

          {/* Initiate Button */}
          <div className="pt-4">
            <button
              onClick={startJailbreak}
              disabled={isProcessing} // Disable button while processing
              className="w-full flex items-center justify-center gap-3 bg-cyan-500 text-black font-bold text-lg py-4 px-6 rounded-lg transition-all duration-300 enabled:hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,184,212,0.4)] enabled:hover:shadow-[0_0_30px_rgba(0,184,212,0.6)]"
            >
              <Power />
              {isProcessing ? status : 'Initiate Jailbreak'}
            </button>
          </div>
        </main>
        
        {/* Footer Section */}
        <footer className="text-center mt-8 text-xs text-gray-500">
          <p>
            <AlertTriangle className="w-3 h-3 inline-block mr-1"/>
            This is a simulation for educational and entertainment purposes only.
          </p>
          <p>Not affiliated with Apple Inc.</p>
        </footer>

      </div>
      
      {/* Success Modal (conditionally rendered) */}
      <AnimatePresence>
        {isComplete && <SuccessModal onReset={resetState} />}
      </AnimatePresence>
    </div>
  );
}
