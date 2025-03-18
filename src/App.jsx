import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";

import "aos/dist/aos.css"; // Import AOS styles

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Industries from "./components/Industries/Industries";
import Sustainability from "./components/Sustainability/Sustainability";
import Privacy from "./components/PrivacyPage/Privacy";
import Terms from "./components/TermsAndConditions/Terms";
import Blog from "./components/BlogsOfSustainability/Blog";
import { Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import Layout from "./Layout";
import ContactUs from "./components/ContactUs/ContactUs";
import Career from "./components/Career/Career";
import CareerModelProvider from "./context/careerContext";
import SustainabilityContextProvider from "./context/sustainabilityContext";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
function App() {
  
  const route = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/industries", element: <Industries /> },
    { path: "/sustainability", element: <Sustainability /> },
    { path: "/sustainability/:slug", element: <Blog /> },
    { path: "/career", element: <Career /> },
    { path: "/contactUs", element: <ContactUs /> },
    { path: "/privacy", element: <Privacy /> },
    { path: "/terms", element: <Terms /> },
    { path: "/*", element: <NotFoundPage /> },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation runs only once
      easing: "ease-in-out", // Easing function
    });
  }, []);
  return (
    <>
      <SustainabilityContextProvider>
        <CareerModelProvider>
          <Layout>
            <Routes>
              {route.map((rout, index) => (
                <Route key={index} path={rout.path} element={rout.element} />
              ))}
            </Routes>
          </Layout>
        </CareerModelProvider>
      </SustainabilityContextProvider>
    </>
  );
}

export default App;
