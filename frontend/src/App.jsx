import Router from './router';
import { ReserveProvider } from './context/ReserveContext';
import ReserveModal from './components/ReserveModal';

function App() {
  return (
    <ReserveProvider>
      <Router />
      <ReserveModal />
    </ReserveProvider>
  );
}

export default App;