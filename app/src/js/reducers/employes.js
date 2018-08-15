export const employes = (state = [], action) => {
	switch (action.type) {
	case 'FETCH_EMPLOYES_SUCCESS':
		return [
		...action.employes
		]
	default:
		return state
	}
}