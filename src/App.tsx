import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main';
import DetailsPage from './pages/Details';

const App = () => (
  <div className={styles.root}>
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
    </header>
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/movie/:id" element={<DetailsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </section>
  </div>
);

export default App;
