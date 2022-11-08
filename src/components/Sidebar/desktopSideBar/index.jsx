import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemText, Switch } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Home, ModeNight, Pages, People, Person, Portrait, Settings, StoreMallDirectory } from "@mui/icons-material";
import { routes } from "../routes";
const Sidebar = ({ mode, setMode }) => {
	console.log();
	return (
		<>
			<Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
				<Box position="fixed">
					<List>
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
				</Box>
			</Box>
		</>
	);
};

export default Sidebar;
