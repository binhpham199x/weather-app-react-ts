interface Props {
	title: string;
}

const Heading = ({ title }: Props) => {
	return (
		<div className=" p-2 rounded-xl uppercase font-bold bg-white ">
			{title}
		</div>
	);
};

export default Heading;
