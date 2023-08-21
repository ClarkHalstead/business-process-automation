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

// const App = () => {
//   const [msalInstance, setMsalInstance] = useState(null);
//   const [account, setAccount] = useState(null);

//   useEffect(() => {
//     async function startMs() {
//       const pca = new PublicClientApplication(msalConfig);
//       await pca.initialize();

//       const handleRedirect = (event) => {
//         if (event.eventType === EventType.LOGIN_SUCCESS) {
//           setAccount(event.payload.account);
//         }
//       };

//       pca.addEventCallback(handleRedirect);

//       pca.handleRedirectPromise().then((response) => {
//         if (response && !response.isEmpty) {
//           setAccount(response.accounts[0]);
//         }
//       });

//       return () => {
//         pca.removeEventCallback(handleRedirect);
//       };
//     }
//     startMs();
//   }, []);

//   const login = async () => {
//     await msalInstance.loginRedirect();
//   };

//   const logout = async () => {
//     await msalInstance.logout();
//     setAccount(null);
//   };

//   return (
//     <div>
//       <h1>React App with Azure AD Authentication</h1>
//       {account ? (
//         <div>
//           <p>Welcome, {account.username}</p>
//           <button onClick={logout}>Logout</button>
//         </div>
//       ) : (
//         <button onClick={login}>Login</button>
//       )}
//     </div>
//   );
// };
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
      {/* <Route path="/profileWithMsal" element={<ProfileWithMsal />} /> */}
      {/* <Route path="/profileRawContext" element={<ProfileRawContext />} /> */}
      {/* <Route
        path="/profileUseMsalAuthenticationHook"
        element={<ProfileUseMsalAuthenticationHook />}
      /> */}
      <Route path="/logout" element={<Logout />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

{
  /* <div>Starting</div>; */
}
