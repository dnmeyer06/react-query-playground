import { Routes, Route } from "react-router-dom";
import ContentPage from "./pages/ContentPage";
import LandingPage from "./pages/LandingPage";
import { apiKeys } from "./config";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}>
        <Route index element={<LandingPage />} />
        <Route path="*" element={<LandingPage />} />
      </Route>
      <Route
        path={apiKeys.CHARACTER}
        element={<ContentPage contentType={apiKeys.CHARACTER} />}
      >
        <Route
          path=":page"
          element={<ContentPage contentType={apiKeys.CHARACTER} />}
        />
      </Route>
      <Route
        path={apiKeys.LOCATION}
        element={<ContentPage contentType={apiKeys.LOCATION} />}
      >
        <Route
          path=":page"
          element={<ContentPage contentType={apiKeys.LOCATION} />}
        />
      </Route>
    </Routes>
  );
}

export default Routers;
