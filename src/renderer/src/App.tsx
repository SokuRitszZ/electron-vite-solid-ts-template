import { WelcomeView } from './pages/welcome';
import { Routes, Route } from '@solidjs/router';

function App() {
  return (
    <Routes>
      <Route path='/' component={WelcomeView} />
    </Routes>
  );
}

export default App;
