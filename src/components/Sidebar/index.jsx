import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemText, Switch } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Home, ModeNight, Pages, People, Person, Portrait, Settings, StoreMallDirectory } from "@mui/icons-material";
const Sidebar = ({ mode, setMode }) => {
	return (
		<>
			<Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
				<Box position="fixed">
					<List>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<Home />
								</ListItemIcon>
								<ListItemText primary="Home" />
							</ListItemButton>
						</ListItem>

						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<Pages />
								</ListItemIcon>
								<ListItemText primary="Pages" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<People />
								</ListItemIcon>
								<ListItemText primary="Groups" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<StoreMallDirectory />
								</ListItemIcon>
								<ListItemText primary="Marketplace" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<Settings />
								</ListItemIcon>
								<ListItemText primary="Setting" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<Person />
								</ListItemIcon>
								<ListItemText primary="Friends" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<Portrait />
								</ListItemIcon>
								<ListItemText primary="Profile" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<ModeNight />
								</ListItemIcon>
								<Switch
									onChange={() => {
										mode === "light" ? setMode("dark") : setMode("light");
									}}
								/>
							</ListItemButton>
						</ListItem>
					</List>
				</Box>
			</Box>
		</>
	);
};

export default Sidebar;
