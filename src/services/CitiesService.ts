import { CityApiData } from "../model/cityApi";

const CITY_API_URL =
	"https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records";

const filterName = (str: string): string => {
	let res: string = "";
	str = str.trim();

	if (str.length == 0) return res;

	res += str[0].toUpperCase();
	for (let i = 1; i < str.length; ++i) {
		let char: string;
		if (!RegExp(/^\p{L}/, "u").test(str[i - 1]))
			char = str[i].toUpperCase();
		else char = str[i].toLowerCase();
		res += char;
	}

	return res;
};

export const fetchCities = async (
	cityNamePrefix: string = "",
	countryNamePrefix: string = "",
	limit: number = 7
): Promise<CityApiData | undefined> => {
	cityNamePrefix = filterName(cityNamePrefix);

	countryNamePrefix = filterName(countryNamePrefix);

	const cityNameQueryPart =
		cityNamePrefix.length == 0
			? ""
			: `&where=startswith(name,"${cityNamePrefix}")`;

	const countryNameQueryPart =
		cityNamePrefix.length == 0
			? ""
			: `&where=startswith(cou_name_en,"${countryNamePrefix}")`;

	const url = CITY_API_URL + `?limit=${limit}&${cityNameQueryPart}&${countryNameQueryPart}`;

	try {
		const response = await fetch(url);
		const res = await response.json();
		return res;
	} catch (error) {
		console.log(error);
	}
};
