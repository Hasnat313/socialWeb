import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Paper, Switch } from "@mui/material";
import { useUIContext } from "../../../context/ui";
import { Close, Delete, Home, ModeNight, Pages, People, Person, Portrait, Settings, StoreMallDirectory } from "@mui/icons-material";
import Sidebar from "../desktopSideBar";
import IconButton from "@mui/material/IconButton";
import { routes } from "../routes";
export default function TemporaryDrawer({ mode, setMode }) {
	const { drawerOpen, setDrawerOpen } = useUIContext();
	console.log("Hana1t");
	return (
		<>
			{drawerOpen && (
				<IconButton aria-label="delete" sx={{ zIndex: 4000, position: "absolute", color: "black", top: 5, left: 200 }}>
					<Close
						sx={{ fontSize: "1.5em" }}
						onClick={() => {
							setDrawerOpen(false);
						}}
					/>
				</IconButton>
			)}
			<Drawer open={drawerOpen} sx={{ "& .MuiDrawer-paper": { borderRadius: "0px 100px 0px 0px" } }}>
				<List sx={{ width: 230 }}>
					{routes.map((element, index) => (
						<ListItem disablePadding key={index}>
							<ListItemButton>
								<ListItemIcon>{element.icon}</ListItemIcon>
								{element.text !== "Mode" ? (
									<ListItemText primary={`${element.text}`} />
								) : (
									<Switch
										onChange={() => {
											mode === "light" ? setMode("dark") : setMode("light");
										}}
									/>
								)}
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</>
	);
}
