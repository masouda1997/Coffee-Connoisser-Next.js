"use client";
import Image from "next/image";
import st from "./page.module.css";
import Banner from "../components/banner";

export default function Home() {
	const handleOnBannerButtonClick = () => {
		console.log("banner button click");
	};
	return (
		<main className={st.main}>
			<Banner
				onClick={handleOnBannerButtonClick}
				buttonText={"View store nearby"}
			/>
		</main>
	);
}
