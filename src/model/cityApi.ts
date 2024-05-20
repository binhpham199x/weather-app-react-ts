export interface CityApiData {
	total_count: string;
	results: City[];
}

export interface City {
	geoname_id: string;
	name: string;
	ascii_name: string;
	alternate_names: string[];
	feature_class: string;
	feature_code: string;
	country_code: string;
	cou_name_en: string;
	country_code_2: string;
	admin1_code: string;
	admin2_code: string;
	admin3_code: string;
	admin4_code: string;
	population: number;
	elevation: string;
	dem: number;
	timezone: string;
	modification_date: string;
	label_en: string;
	coordinates: {
		lon: number;
		lat: number;
	};
}

