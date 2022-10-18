import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';

const Nav = React.lazy(() => import('./components/Nav'));
const Project = React.lazy(() => import('./pages/Project'));
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Loading = React.lazy(() => import('./components/Loading'));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
