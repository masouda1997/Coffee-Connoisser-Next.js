import st from "./banner.module.css";

export default function Banner(props) {
	return (
		<div className={st.container}>
			<h1 className={st.title}>
				<span className={st.title1}>Coffee</span>
				<span className={st.title2}>Connoisseur</span>
			</h1>
			<p className={st.subTitle}>Discover your local coffee shops!</p>
			<button className={st.button} onClick={props.onClick}>
				{props.buttonText}
			</button>
		</div>
	);
}
