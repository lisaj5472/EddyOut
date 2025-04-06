import { UserLogin } from "./UserLogin";

export interface UserData extends UserLogin {
  id: number | null;
  username?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  phone?: string | null;
}
