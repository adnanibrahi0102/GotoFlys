import React ,{useState , useEffect}from "react";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import LoadingComponent from "./components/LoadingComponent";
const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time (e.g., fetching data or resources)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Change the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <Navigation />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;