import { AppRoles } from "./roles";

export interface IAuthContext {
  id: string;
  email: string;
  role: AppRoles;
  isRemoved: boolean;
}
