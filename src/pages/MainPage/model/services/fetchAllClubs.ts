import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Club} from "src/entities/Club/model/types/club";

export const fetchAllClubs = createAsyncThunk<Club[], undefined>(
		'fetchAllClubs',
		async (_, { rejectWithValue }) => {
			try {
				const response = await axios.get('http://localhost:8000/clubs');

				if(!response.data) {
					throw new Error('error');
				}

				return response.data;
			} catch (e) {
				return rejectWithValue(e.message)
			}
		}
)