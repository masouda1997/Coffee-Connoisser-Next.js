"use client";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function page() {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	console.log("🔴", pathname.match, searchParams);
	return <div>{pathname.split("/").at(-1)}</div>;
}
