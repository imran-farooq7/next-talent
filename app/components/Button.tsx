"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const Button = () => {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			disabled={pending}
		>
			{pending ? "Submitting..." : "Add Talent"}
		</button>
	);
};

export default Button;
