interface Props {
	title: string;
}

const Heading = ({ title }: Props) => {
	return (
		<div className=" p-2  uppercase font-bold bg-white ">
			{title}
		</div>
	);
};

export default Heading;
