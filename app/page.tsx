import AddTalent from "./components/AddTalent";
import Talents from "./components/Talents";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="text-cyan-500 text-4xl italic font-bold">
				Next Talent 🔥
			</h1>
			<p>Hire Top 1% Talent</p>
			<AddTalent />
			<Talents />
		</main>
	);
}
