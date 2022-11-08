import { useState } from "react";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar/desktopSideBar";
import { Box, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/theme";
import themeDark from "./assets/theme-dark";
import Add from "./components/Add";
import { UIProvider } from "./context/ui";
import TemporaryDrawer from "./components/Sidebar/mobileSideBar";
function App() {
	const [mode, setMode] = useState("light");

	return (
		<>
			<ThemeProvider theme={mode === "light" ? theme : themeDark}>
				<UIProvider>
					<Box bgcolor={"background.default"} color={"text.primary"}>
						<Navbar />
						<Stack direction="row" spacing={2} justifyContent="space-between">
							<Sidebar mode={mode} setMode={setMode} />
							<Feed />
							<Rightbar />
						</Stack>
						<Add />
						<TemporaryDrawer mode={mode} setMode={setMode} />
					</Box>
				</UIProvider>
			</ThemeProvider>
		</>
	);
}

export default App;
