import Link from "next/link";
import React from "react";

export const metadata = {
	title: "Coffee store",
};

export default function coffeeStore() {
	return (
		<div>
			<Link href="/">Back to home</Link>
		</div>
	);
}
