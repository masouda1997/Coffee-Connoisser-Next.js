"use client";
import Image from "next/image";
import st from "./page.module.css";
import st2 from "../components/banner.module.css";
import Banner from "../components/banner";
import Link from "next/link";

export default function Home() {
	const handleOnBannerButtonClick = () => {
		console.log("banner button click");
	};
	return (
		<main className={`${st.main}`}>
			<div className={st2.heroSec}>
				<Banner
					onClick={handleOnBannerButtonClick}
					buttonText={"View store nearby"}
				/>
				<div className={st2.heroImg}>
					<Image
						src="/static/coffee-cup.png"
						width={300}
						height={300}
					/>
				</div>
			</div>
		</main>
	);
}
