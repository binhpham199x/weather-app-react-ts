export const getPlaceFromInput = (input: string): [string, string] => {
	input = input.trim();
	const parts = input.split(",");
	if (parts.length != 2) throw new Error("Invalid Input!");

	const trimmedParts = parts.map((part) => part.trim());

	return [trimmedParts[0], trimmedParts[1]];
};
