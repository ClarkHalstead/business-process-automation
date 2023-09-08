import { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import Typography from "@material-ui/core/Typography";

const WelcomeName = () => {
  const { instance } = useMsal();
  const [name, setName] = useState(null);

  const activeAccount = instance.getActiveAccount();
  useEffect(() => {
    if (activeAccount) {
      setName(activeAccount.name.split(" ")[0]);
    } else {
      setName(null);
    }
  }, [activeAccount]);

  if (name) {
    return <Typography variant="h6" style={{marginRight: "10px"}}>Welcome, {name}</Typography>;
  } else {
    return null;
  }
};

export default WelcomeName;