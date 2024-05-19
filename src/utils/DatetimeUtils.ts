import { MONTHS } from "./Constants";

const formatTime = (k: number): string => {
	if (k < 10) {
		return "0" + k;
	} else {
		return k + "";
	}
};

const formatDate = (d: number): string => {
	if (d < 10 || d > 20) {
		if (d % 10 == 1) return d + "st";
		else if (d % 10 == 2) return d + "nd";
		else if (d % 10 == 3) return d + "rd";
	}
	return d + "th";
};

export const currentTime = (date: Date): string => {
	const hour = formatTime(date.getHours());
	const min = formatTime(date.getMinutes());
	const sec = formatTime(date.getSeconds());

	// const n = WEEKDAYS[date.getDay()];
	const d = formatDate(date.getDate());
	const m = MONTHS[date.getMonth()];
	const y = date.getFullYear();

	return `${hour}:${min}:${sec}, ${d} ${m} ${y}`;
};
