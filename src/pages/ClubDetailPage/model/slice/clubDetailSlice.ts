import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Club, ClubDetailState, ClubState} from "src/entities/Club/model/types/club";
import {getClubById} from "../services/getClubById";


const initialState: ClubDetailState = {
	isLoading: false,
	error: '',
	data: undefined,
}

const clubDetailSlice = createSlice({
	name: 'clubListSlice',
	initialState,
	reducers: undefined,
	extraReducers: (builder) => {
		builder
				.addCase(getClubById.pending, (state: ClubDetailState, action) => {
					state.error = undefined;
					state.isLoading = true;
				})
				.addCase(getClubById.fulfilled, (state: ClubDetailState, action: PayloadAction<Club>) => {
					state.isLoading = false;
					state.data = action.payload;
				})
				.addCase(getClubById.rejected, (state: ClubDetailState, action) => {
					state.isLoading = false;
					state.error = action.payload;
				});
	}
})

export const { actions: clubDetailActions } = clubDetailSlice;
export const { reducer: clubDetailReducer } = clubDetailSlice;
