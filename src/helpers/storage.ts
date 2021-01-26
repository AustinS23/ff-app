export function getLocalStorageItem<T = string>(key: string) {
	const item = window.localStorage.getItem(key);
	return item === null ? null : (JSON.parse(item) as T);
}

export function setLocalStorageItem(key: string) {
	return function setItem<T = string>(value: T) {
		window.localStorage.setItem(key, JSON.stringify(value));
	};
}
