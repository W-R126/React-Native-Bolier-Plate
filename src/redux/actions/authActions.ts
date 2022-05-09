import { TOGGLE_LOGIN } from "./types";

export const toggleLogin = (loginStatus: boolean) => ({
    type: TOGGLE_LOGIN,
    payload: loginStatus
});