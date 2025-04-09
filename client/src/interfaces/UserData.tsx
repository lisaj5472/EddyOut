import { UserLogin } from "./UserLogin";

export interface UserData extends UserLogin {
  id: string | null;
  username?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  phone?: string | null;
}
