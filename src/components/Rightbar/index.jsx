import React from "react";
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
const Rightbar = () => {
	return (
		<>
			<Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
				<Box position="fixed" width={300}>
					<Typography>Online Friends</Typography>
					<AvatarGroup total={24}>
						<Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1525127752301-99b0b6379811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
						<Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1525127752301-99b0b6379811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
						<Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1525127752301-99b0b6379811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
						<Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1525127752301-99b0b6379811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
					</AvatarGroup>
					<Typography my={2}>Latest Posts</Typography>
					<ImageList cols={3} rowHeight={100} gap={5}>
						<ImageListItem>
							<img src="https://images.unsplash.com/photo-1525127752301-99b0b6379811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" loading="lazy" />
						</ImageListItem>
						<ImageListItem>
							<img src="https://images.unsplash.com/photo-1444465693019-aa0b6392460d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" loading="lazy" />
						</ImageListItem>
						<ImageListItem>
							<img src="https://images.unsplash.com/photo-1522277245807-5e608aa8adcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" loading="lazy" />
						</ImageListItem>
					</ImageList>
					<Typography sx={{ mt: 2 }}>Latest Conversation</Typography>
					<List sx={{ width: "100%", height: "40vh", maxWidth: 360, bgcolor: "background.paper", overflow: "auto" }}>
						<ListItem alignItems="flex-start">
							<ListItemAvatar>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
							</ListItemAvatar>
							<ListItemText
								primary="Brunch this weekend?"
								secondary={
									<React.Fragment>
										<Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
											Ali Connors
										</Typography>
										{" — I'll be in your neighborhood doing errands this…"}
									</React.Fragment>
								}
							/>
						</ListItem>
						<Divider variant="inset" component="li" />
						<ListItem alignItems="flex-start">
							<ListItemAvatar>
								<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
							</ListItemAvatar>
							<ListItemText
								primary="Summer BBQ"
								secondary={
									<React.Fragment>
										<Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
											to Scott, Alex, Jennifer
										</Typography>
										{" — Wish I could come, but I'm out of town this…"}
									</React.Fragment>
								}
							/>
						</ListItem>
						<Divider variant="inset" component="li" />
						<ListItem alignItems="flex-start">
							<ListItemAvatar>
								<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
							</ListItemAvatar>
							<ListItemText
								primary="Oui Oui"
								secondary={
									<React.Fragment>
										<Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
											Sandra Adams
										</Typography>
										{" — Do you have Paris recommendations? Have you ever…"}
									</React.Fragment>
								}
							/>
						</ListItem>
						<ListItem alignItems="flex-start">
							<ListItemAvatar>
								<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
							</ListItemAvatar>
							<ListItemText
								primary="Oui Oui"
								secondary={
									<React.Fragment>
										<Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
											Sandra Adams
										</Typography>
										{" — Do you have Paris recommendations? Have you ever…"}
									</React.Fragment>
								}
							/>
						</ListItem>
					</List>
				</Box>
			</Box>
		</>
	);
};

export default Rightbar;
