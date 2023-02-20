import { User } from "../signup/user.interface";

export interface Userlogin {
    status: 'success' | 'error';
    message?: string;
    user?: User;
}