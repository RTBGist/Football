import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchAllClubs} from "../services/fetchAllClubs";
import {Club, ClubState} from "src/entities/Club/model/types/club";

const initialState: ClubState = {
	isLoading: false,
	error: '',
	data: [],
}

const clubListSlice = createSlice({
	name: 'clubListSlice',
	initialState,
	reducers: undefined,
	extraReducers: (builder) => {
		builder
				.addCase(fetchAllClubs.pending, (state: ClubState, action) => {
					state.error = undefined;
					state.isLoading = true;
				})
				.addCase(fetchAllClubs.fulfilled, (state: ClubState, action: PayloadAction<Club[]>) => {
					state.isLoading = false;
					state.data = action.payload;
				})
				.addCase(fetchAllClubs.rejected, (state: ClubState, action) => {
					state.isLoading = false;
					state.error = action.payload;
				});
	}
})

export const { actions: clubListActions } = clubListSlice;
export const { reducer: clubListReducer } = clubListSlice;
