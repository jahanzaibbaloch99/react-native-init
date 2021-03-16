import { SET_FCM_TOKEN } from "../types";

export const setFCMToken = (payload) => ({
	type: SET_FCM_TOKEN,
	payload
});