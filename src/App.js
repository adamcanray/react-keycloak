import { ReactKeycloakProvider } from "@react-keycloak/web";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import PrivateRoute from "./helpers/PrivateRoute";
import keycloak from "./Keycloak";
import WelcomePage from "./pages/Homepage";
import SecuredPage from "./pages/Securedpage";

function App() {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
        <React.StrictMode>
          <Nav />
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<WelcomePage />} />
              <Route
                path="/secured"
                element={
                  <PrivateRoute>
                    <SecuredPage />
                  </PrivateRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </React.StrictMode>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
