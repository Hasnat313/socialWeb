import { AppBar, Toolbar, styled, Box } from "@mui/material";

export const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})


export const SearchBarBox = styled('div')(({ theme }) => ({
    backgroundColor: "white",
    padding: "0px 10px",
    width: "40%",
    borderRadius: theme.borderRadius.shape
}))

export const NotificationBar = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }

}))
export const UserBar = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))