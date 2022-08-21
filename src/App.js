// import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Project from "./pages/Project";
// import Chat from "./pages/Chat";
// import About from "./pages/About";
import React, { Suspense } from "react";

const Nav = React.lazy(() => import("./components/Nav"));
const Project = React.lazy(() => import("./pages/Project"));
const Home = React.lazy(() => import("./pages/Home"));
const Chat = React.lazy(() => import("./pages/Chat"));
const About = React.lazy(() => import("./pages/About"));
const Loading = React.lazy(() => import("./components/Loading"));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
