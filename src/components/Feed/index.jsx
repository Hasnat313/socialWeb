import React from "react";
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
const Feed = () => {
	return (
		<>
			<Box flex={4} p={2}>
				<Card sx={{ m: { xs: 0, md: 5 }, mt: { xs: 3 } }}>
					<CardHeader
						avatar={
							<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
								R
							</Avatar>
						}
						action={
							<IconButton aria-label="settings">
								<MoreVert />
							</IconButton>
						}
						title="Shrimp and Chorizo Paella"
						subheader="September 14, 2016"
					/>
					<CardMedia component="img" height="20%" image="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1161&q=80" alt="Paella dish" />
					<CardContent>
						<Typography variant="body2" color="text.secondary">
							This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
						<IconButton aria-label="share">
							<Share />
						</IconButton>
					</CardActions>
				</Card>
				<Card sx={{ m: { xs: 0, md: 5 }, mt: { xs: 3 } }}>
					<CardHeader
						avatar={
							<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
								R
							</Avatar>
						}
						action={
							<IconButton aria-label="settings">
								<MoreVert />
							</IconButton>
						}
						title="Shrimp and Chorizo Paella"
						subheader="September 14, 2016"
					/>
					<CardMedia component="img" height="20%" image="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Paella dish" />
					<CardContent>
						<Typography variant="body2" color="text.secondary">
							This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
						<IconButton aria-label="share">
							<Share />
						</IconButton>
					</CardActions>
				</Card>
			</Box>
		</>
	);
};

export default Feed;
