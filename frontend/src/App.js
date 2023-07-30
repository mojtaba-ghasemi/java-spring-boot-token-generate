import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useLocation, useRoutes } from "react-router";
import { Loading } from "./components";
import routes from "./routes";

export default function App() {
  const location = useLocation();
  const loading = useSelector((s) => s.loading.length > 0);
  const isLogged = useSelector((s) => s.isLogged);
  const elements = useRoutes(routes({ isLogged }));
  useEffect(() => {
    const whitePaths = ["/sign-in"];
    if (whitePaths.includes(location.pathname)) {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "";
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <React.Fragment>
      {elements}
      <Toaster position="top-left" reverseOrder={true} />
      {loading && <Loading />}

    </React.Fragment>
  );
}
