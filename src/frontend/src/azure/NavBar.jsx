import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import WelcomeName from "./WelcomeName";
import SignInSignOutButton from "./SignInSignOutButton";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "rgb(0, 120, 212)", marginBottom: "2px" }}>
        <Toolbar style={{ display: "flex", justifyContent: "center" }}>
          {/* <Typography sx={{ flexGrow: 1 }} style={{paddingLeft: "10px"}}> */}
          <Link
            component={RouterLink}
            to="/"
            color="inherit"
            variant="h6"
            style={{ marginRight: "10px" }}
          >
            MS Identity Platform
          </Link>
          {/* </Typography> */}

          <WelcomeName />
          <SignInSignOutButton />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
