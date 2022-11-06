import React, { useState } from "react";
import { Add as AddIcon } from "@mui/icons-material";
import { Fab, Modal, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
const Add = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Tooltip title="Add" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 75 } }}>
				<Fab
					color="primary"
					aria-label="add"
					onClick={() => {
						setOpen(true);
					}}
				>
					<AddIcon />
				</Fab>
			</Tooltip>
			<Modal
				open={open}
				onClose={() => {
					setOpen(false);
				}}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box>Geo</Box>
			</Modal>
		</>
	);
};

export default Add;
