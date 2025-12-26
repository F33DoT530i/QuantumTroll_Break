import Layout from './components/Layout.jsx';
import JailbreakPage from './pages/Jailbreak.jsx';

// Main App component that wraps the Jailbreak page in the Layout
function App() {
  return (
    <Layout>
      <JailbreakPage />
    </Layout>
  );
}

export default App;
