import { UserData } from "./UserData";

export interface GearItem {
  id: number | null;
  name: string | null;
  tripId: string | null;
  claimedBy: string | null;
    crewID: number | null;
    //should this be crewdata?
    assignedUser: UserData | null;
}
