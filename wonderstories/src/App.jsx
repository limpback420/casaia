import React, { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Wizard = lazy(() => import('./pages/Wizard'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <nav className="p-4 bg-rose-300 text-white">
        <Link to="/">WonderStories</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wizard" element={<Wizard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}
