import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const App = ({ children }) => (
  <>
    <Header />
    <>{children}</>
    <Footer />
  </>
);

export default App;
