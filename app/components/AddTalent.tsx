"use client";
import { useFormState, useFormStatus } from "react-dom";
import { createTalent } from "../actions/action";
import Button from "./Button";

export default function AddTalent() {
	const initialState = {
		name: "",
		email: "",
		title: "",
		skills: "",
	};
	const [state, formAction] = useFormState(createTalent, initialState);
	return (
		<div className="flex w-full min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="mt-5 sm:mx-auto sm:w-full sm:max-w-lg">
				<form className="space-y-6" action={formAction}>
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Name
						</label>
						<div className="mt-2">
							<input
								id="name"
								name="name"
								type="text"
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Email
						</label>
						<div className="mt-2">
							<input
								id="email"
								name="email"
								type="email"
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="title"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Title
						</label>
						<div className="mt-2">
							<input
								id="title"
								name="title"
								type="text"
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="skills"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Skills
						</label>
						<div className="mt-2">
							<textarea
								id="skills"
								name="skills"
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div>
						<Button />
					</div>
					{state.status === "success" && (
						<p className="text-emerald-400">{state.message}</p>
					)}
				</form>
			</div>
		</div>
	);
}
