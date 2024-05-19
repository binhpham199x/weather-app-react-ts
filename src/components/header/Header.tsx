import Heading from "./Heading";
import Clock from "./Clock";

interface Props {
	title?: string;
}

const Header = ({ title = "THE WEATHER APP" }: Props) => {
	return (
		<>
			<div
				id="headerWrapper"
				className="flex justify-between content-center "
			>
				<Heading title={title}></Heading>

				<Clock />
			</div>
		</>
	);
};

export default Header;
