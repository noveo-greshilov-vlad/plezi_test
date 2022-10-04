import { Route, Routes } from 'react-router-dom';

import { useConfigFetcher } from 'hooks/useConfigFetcher';
import { Details } from 'pages/Details';
import { Main } from 'pages/Main';
import { NotFound } from 'ui/NotFound/NotFound';

const App = () => {
  useConfigFetcher();

  return (
    <div className="flex h-full flex-col">
      <header className="bg-gradient-to-r from-cyan-500 to-blue-400 p-3 shadow-2xl">
        <h1 className="font-sans text-xl">Plezi's most populars movies</h1>
        <h2 className="font-mono text-sm">by themoviedb</h2>
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
