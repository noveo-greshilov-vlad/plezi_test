import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main as MainPage, Details as DetailsPage } from 'Pages';
import { NotFound } from 'Components';
import { useAppDispatch } from 'Hooks';
import { fetchConfig } from 'Store/features/config/fetchConfig';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchConfig());
  }, []);

  return (
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
};

export default App;
