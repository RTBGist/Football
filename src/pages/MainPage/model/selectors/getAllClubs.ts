import {RootState} from "src/app/store/store";

export const getAllClubs = (state: RootState) => state.clubList?.data || undefined;
export const getAllClubsIsLoading = (state: RootState) => state.clubList?.isLoading || undefined;
export const getAllClubsError = (state: RootState) => state.clubList?.error || undefined;