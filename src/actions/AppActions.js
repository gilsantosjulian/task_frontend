import axios from 'axios';
import { ACCIONES_URL, CUENTAS_URL } from '../consts';

export const FETCH_ACTIONS = 'FETCH_ACTIONS';
export const FETCH_CUENTAS = 'FETCH_CUENTAS';

export function fetchAcciones() {
	return ((dispatch) => {
		axios.get(ACCIONES_URL, { 'headers': { 'API_KEY': "5b481fc2ae177010e197026b74c79b66b8db490ea965214ccf25a9c8" } })
			.then((res) => {
				dispatch({ type: FETCH_ACTIONS, payload: res.data.entities });
			})
			.catch((error) => {
				console.log(error);
			});
	});
}

export function fetchCuentas() {
	return ((dispatch) => {
		axios.get(CUENTAS_URL, { 'headers': { 'API_KEY': "5b481fc2ae177010e197026b74c79b66b8db490ea965214ccf25a9c8" } })
			.then((res) => {
				dispatch({ type: FETCH_CUENTAS, payload: res.data });
			})
			.catch((error) => {
				console.log(error);
			});
	});
}

