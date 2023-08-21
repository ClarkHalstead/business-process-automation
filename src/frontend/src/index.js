import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App/App";
import AzureApp from "./azure";

import { PublicClientApplication, EventType } from "@azure/msal-browser";
import { msalConfig } from "./azure/authConfig";

async function start() {}

export const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.initialize().then(async () => {
  // Default to using the first account if no account is active on page load

//   await msalInstance.handleRedirectPromise();

  // Check if user signed in
//   const account = msalInstance.getActiveAccount();
//   if (!account) {
//     // redirect anonymous user to login page
//     msalInstance.loginRedirect();
//   }

  if (
    !msalInstance.getActiveAccount() &&
    msalInstance.getAllAccounts().length > 0
  ) {
    // Account selection logic is app dependent. Adjust as needed for different use cases.
    msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
  }

  // Optional - This will update account state if a user signs in from another tab or window
  msalInstance.enableAccountStorageEvents();

  msalInstance.addEventCallback((event) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
      const account = event.payload.account;
      msalInstance.setActiveAccount(account);
    }
  });

  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);

  root.render(
    <Router>
      {/* <ThemeProvider theme={theme}> */}
      {/* <App pca={msalInstance} /> */}
      <AzureApp pca={msalInstance} />
      {/* </ThemeProvider> */}
    </Router>
  );
});
