import Typography from "@material-ui/core/Typography";
import NavBar from "./NavBar";

export const PageLayout = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
};
