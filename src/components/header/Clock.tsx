import { useEffect, useState } from "react";
import { currentTime } from "../../utils/DatetimeUtils";

const Clock = () => {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setDate(new Date());
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};

	}, []);

	return <div id="clock" className="p-2 bg-white ">{currentTime(date)}</div>;
};

export default Clock;
