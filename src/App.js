import React from 'react';
import Layout from './components/Layout';
import JailbreakPage from './pages/Jailbreak';

// Main App component that wraps the Jailbreak page in the Layout
function App() {
  return (
    <Layout>
      <JailbreakPage />
    </Layout>
  );
}

export default App;
