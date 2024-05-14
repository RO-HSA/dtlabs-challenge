import { AxiosResponse } from "axios";
import { UserToken } from "./user";

export interface Login {
    username: string;
    password: string;
}

export type LoginResponse = AxiosResponse<UserToken, any>
