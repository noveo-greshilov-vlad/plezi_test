import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main';
import DetailsPage from './pages/Details';
import NotFound from './components/NotFound';

const App = () => (
  <div className="flex flex-col h-full">
    <header className="p-3 bg-gradient-to-r from-cyan-500 to-blue-400 shadow-2xl">
      <h1 className="text-xl font-sans">Plezi's most populars movies</h1>
      <h2 className="text-sm font-mono">by themoviedb</h2>
    </header>
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/movie/:id" element={<DetailsPage />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </div>
);

export default App;
