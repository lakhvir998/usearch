import { useEffect } from "react";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";
import HomepageV2 from "./pages/homepage";
import Header from "./Header";

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname);
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="main-wrapper">
      <Header />
      <HomepageV2 />
    </div>
  );
}

export default App;
