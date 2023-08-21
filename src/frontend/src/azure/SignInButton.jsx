import { useState } from "react";
import { useMsal } from "@azure/msal-react";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { loginRequest } from "./authConfig";

export const SignInButton = () => {
  const { instance } = useMsal();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleLogin = async (loginType) => {
    setAnchorEl(null);

    if (loginType === "popup") {
      /**
       * When using popup and silent APIs, we recommend setting the redirectUri to a blank page or a page
       * that does not implement MSAL. Keep in mind that all redirect routes must be registered with the application
       * For more information, visit: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/login-user.md#redirecturi-considerations
       */
      await instance.loginPopup({
        ...loginRequest,
        redirectUri: "/", // e.g. /redirect
      });
    } else if (loginType === "redirect") {
      await instance.loginRedirect(loginRequest);
    }
  };

  return (
    <div>
      <Button onClick={() => handleLogin("redirect")} color="inherit">
        Login
      </Button>
    </div>
  );
};
