interface Props {
	title: string;
}

const Heading = ({ title }: Props) => {
	return (
		<div className="bg-slate-400 p-2 rounded-xl uppercase font-bold ">
			{title}
		</div>
	);
};

export default Heading;
