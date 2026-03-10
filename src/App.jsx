import { useDeviceMood } from './hooks/useDeviceMood';
import { LandingPage } from './pages/landingpage';

function App() {
  useDeviceMood();
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
