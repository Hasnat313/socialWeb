import { createTheme } from "@mui/material/styles";
import { borderRadius } from "./base/border";
// import { borderRadius } from "./base/border";
export default createTheme({

    palette: {
        mode: "dark"
    },
    borderRadius: { ...borderRadius }

})