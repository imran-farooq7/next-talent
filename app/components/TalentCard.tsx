"use client";
import { Talent } from "@prisma/client";
import { deleteTalent } from "../actions/action";

const TalentCard = ({ talent }: { talent: Talent }) => {
	return (
		<div className="divide-y w-96 divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
			<div className="px-4 py-5 sm:px-6">
				<h1 className="text-2xl font-bold text-emerald-400">{talent.name}</h1>
				<p>{talent.title}</p>
				<p>{talent.email}</p>
			</div>
			<div className="px-4 py-5 sm:p-6">{talent.skills}</div>
			<div className="px-4 py-5 sm:p-6">
				<div className="flex flex-wrap justify-between">
					<button
						onClick={async () => await deleteTalent(talent.id)}
						className="bg-red-500 hover:scale-105 transition-all px-4 py-2 rounded-md text-white"
					>
						Delete
					</button>
					<button className="bg-emerald-500 hover:scale-105 transition-all px-4 py-2 rounded-md text-white">
						Hire now
					</button>
				</div>
			</div>
		</div>
	);
};

export default TalentCard;
