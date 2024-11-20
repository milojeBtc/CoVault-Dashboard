import { BACKEND_URL, IWhitelistType } from "../config";
import axios from 'axios';

export const saveWLController = async (payload: IWhitelistType) => {
    console.log("BACKEND_URL ==> ", BACKEND_URL);
    const url = `${BACKEND_URL}/whitelist/wl`;
    const result = await axios.post(url, payload); 
    return result;
}