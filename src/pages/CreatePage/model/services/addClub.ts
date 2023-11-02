import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Club} from "src/entities/Club/model/types/club";

export const addClub = createAsyncThunk<any, Club>(
		'addClub',
		async (club, thunkAPI) => {
			try {
				const response = await axios.post('http://localhost:8000/clubs', club);

				if(!response.data) {
					throw new Error();
				}

				return response.data;
			} catch (e) {

			}
		}
)