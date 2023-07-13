import "./App.css";
import React, { useState } from "react";
import OtpComponent from "./components/OtpComponent";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return <>{loading ? <Loader /> : <OtpComponent />}</>;
}

export default App;
