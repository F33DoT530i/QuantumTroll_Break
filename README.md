# QuantumBreak - iOS 17.6 Jailbreak Simulator

A visual demonstration and educational tool simulating the iOS 17.6 jailbreak process for the iPhone 15 Pro Max (A17 device).

## ⚠️ Important Disclaimer

**This is a SIMULATION for educational and entertainment purposes only.**
- No actual jailbreaking occurs
- No changes are made to any device
- This does not bypass iOS security
- Not affiliated with Apple Inc.

## 🚀 Features

- Interactive jailbreak simulation with realistic progress tracking
- Animated UI with smooth transitions using Framer Motion
- Real-time log output displaying simulated exploit steps
- Progress bar tracking the jailbreak process
- Success modal upon completion
- Responsive design for desktop and mobile devices

## 🛠️ Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/F33DoT530i/QuantumTroll_Break.git
cd QuantumTroll_Break
```

2. Install dependencies:
```bash
npm install
```

## 🏃‍♂️ Running the Application

### Development Mode
Start the development server with hot reload:
```bash
npm run dev
```
The application will open automatically at `http://localhost:3000`

### Build for Production
Create an optimized production build:
```bash
npm run build
```
The build output will be in the `dist/` directory.

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Linting
Run ESLint to check code quality:
```bash
npm run lint
```

## 🔧 Bug Fixes Applied

### Fixed in src/pages/Jailbreak.js:
- **Line 34**: Fixed syntax error `ref__={endOfLogsRef}` → `ref={endOfLogsRef}`
  - The double underscore was a typo that would cause React to fail rendering the log scroll functionality

## 📁 Project Structure

```
QuantumTroll_Break/
├── src/
│   ├── components/
│   │   └── Layout.jsx          # Layout wrapper component
│   ├── pages/
│   │   └── Jailbreak.jsx       # Main jailbreak simulator page
│   ├── App.jsx                 # Root application component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles with Tailwind directives
├── public/                     # Static assets
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── .eslintrc.cjs               # ESLint configuration
└── README.md                   # This file
```

## 🎮 How to Use

1. Launch the application in your browser
2. Click the "Initiate Jailbreak" button
3. Watch the simulated jailbreak process with:
   - Real-time log messages
   - Progress bar updates
   - Status indicators
4. Upon completion, a success modal appears
5. Click "Run Again" to restart the simulation

## 🔒 Simulated Exploit Chain

The simulator displays the following steps:
1. Initializing QuantumBreak exploit chain
2. Connecting to device (iPhone 15 Pro Max)
3. Detecting firmware (iOS 17.6)
4. Analyzing kernel version
5. Injecting k-pac bypass payload
6. Gaining root access
7. Patching AMFI and CoreTrust
8. Installing TrollStore helper package
9. Finalizing the process

## 📚 Educational Value

This project demonstrates:
- React state management and hooks
- Animation techniques with Framer Motion
- Responsive UI design with Tailwind CSS
- Component composition and reusability
- Simulated asynchronous processes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## 📄 License

See the [LICENSE](LICENSE) file for details.

## 🔗 Related Resources

- [CVE-2023-41993 POC](https://po6ix.github.io/POC-for-CVE-2023-41993/pwn.html) - Referenced vulnerability
- Original exploit design documentation available in the `Exploit design` file

## 👨‍💻 Development Notes

### Changes Made to Fix the Exploit:
1. **Fixed React ref bug**: Changed `ref__` to `ref` in LogOutput component
2. **Created proper React project structure**: Set up Vite-based React application
3. **Implemented all components**: Jailbreak.jsx, Layout.jsx, App.jsx, and entry point
4. **Added build tooling**: Configured Vite, Tailwind CSS, PostCSS, and ESLint
5. **Documented the codebase**: Added comprehensive comments throughout

The simulator now functions correctly as an educational demonstration tool.
