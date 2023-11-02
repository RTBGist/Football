import {RootState} from "src/app/store/store";

export const getClub = (state: RootState) => state.clubDetail?.data || undefined;
export const getClubIsLoading = (state: RootState) => state.clubDetail?.isLoading || undefined;
export const getClubError = (state: RootState) => state.clubDetail?.error || undefined;