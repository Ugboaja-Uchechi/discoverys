import { useEffect, useState } from "react";
import Home from "./components/Home";
import { ClimbingBoxLoader } from "react-spinners";

const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  backgroundColor: "hsl(260, 8%, 14%)",
};

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <ClimbingBoxLoader
        cssOverride={override}
          color={"#7cc4f0"}
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <Home />
      )}

    </div>
  );
}

export default App;
