import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import App from "../App/App";

export function Home() {
  return (
    <>
      <AuthenticatedTemplate>

        <App/>
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <Typography variant="h6">
          <center>Please sign-in to see your profile information.</center>
        </Typography>
      </UnauthenticatedTemplate>
    </>
  );
}
