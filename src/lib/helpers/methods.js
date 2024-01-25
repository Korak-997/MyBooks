export const cleanObject = (object) => {
	for (let key in object) {
		if (object[key] === '' || object[key] === false || object[key] === undefined) {
			delete object[key];
		}
	}
	return object;
};
