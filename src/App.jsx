// import { useState } from "react";

// import "./App.css";
// import Header from "./shared/Header";
// import Home from "./Home";

// function App() {
//   return (
//     <>
//       <Header />
//       <Home/>
//     </>
//   );
// }

// export default App;

import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// import Pages from "./Pages";
// import Layout from "./Layout";
import { routes } from "./Routes";
import Pages from "./Pages";
import Layout from "./Layout";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <Layout>
              <Pages />
            </Layout>
          }
        />

        {/* Other Pages from routes.jsx */}
        {routes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={<Layout>{route.element}</Layout>}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
