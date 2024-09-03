import { getAllTalents } from "../actions/action";
import TalentCard from "./TalentCard";

const Talents = async () => {
	const talents = await getAllTalents();
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
			{talents.map((talent) => (
				<TalentCard key={talent.id} talent={talent} />
			))}
		</div>
	);
};

export default Talents;
