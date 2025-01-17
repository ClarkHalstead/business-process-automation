import { useState } from "react";
import { useMsal } from "@azure/msal-react";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { AccountPicker } from "./AccountPicker";
import { useNavigate } from "react-router-dom";

export const SignOutButton = () => {
  const navigate = useNavigate();
  const { instance } = useMsal();
  const [accountSelectorOpen, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleLogout = (logoutType) => {
    setAnchorEl(null);

    if (logoutType === "popup") {
      instance.logoutPopup();
    } else if (logoutType === "redirect") {
      instance.logoutRedirect();
    }
  };

  const handleProfile = () => {
    setAnchorEl(null);

    navigate("/profile");
  };

  const handleAccountSelection = () => {
    setAnchorEl(null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        onClick={(event) => setAnchorEl(event.currentTarget)}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => handleAccountSelection()} key="switchAccount">
          Switch Account
        </MenuItem>
        <MenuItem onClick={() => handleProfile()} key="profile">
          Profile
        </MenuItem>
        <MenuItem onClick={() => handleLogout("redirect")} key="logoutRedirect">
          Logout
        </MenuItem>
      </Menu>
      <AccountPicker open={accountSelectorOpen} onClose={handleClose} />
    </div>
  );
};
