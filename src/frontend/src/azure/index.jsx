import React, { useState, useEffect } from "react";
import { PublicClientApplication, EventType } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";
import { CustomNavigationClient } from "./utils/navigation";
import { MsalProvider } from "@azure/msal-react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { PageLayout } from "./PageLayout";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Logout } from "./Logout";



function App({ pca }) {
  // The next 3 lines are optional. This is how you configure MSAL to take advantage of the router's navigate functions when MSAL redirects between pages in your app
  const navigate = useNavigate();
  const navigationClient = new CustomNavigationClient(navigate);
  pca.setNavigationClient(navigationClient);

  return (
    <MsalProvider instance={pca}>
      <PageLayout>
        <Grid container justifyContent="center">
          <Pages />
        </Grid>
      </PageLayout>
    </MsalProvider>
  );
}

export default App;

function Pages() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

{
  /* <div>Starting</div>; */
}
