import "./globals.css";
import st from "./page.module.css";

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function Layouts({ children }) {
	return (
		<html lang="en">
			<body className={st.container}>{children}</body>
		</html>
	);
}
