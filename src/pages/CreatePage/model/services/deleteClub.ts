import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Club} from "src/entities/Club/model/types/club";

export const deleteClub = createAsyncThunk<any, Club>(
		'deleteClub',
		async (club, thunkAPI) => {
			try {
				const response = await axios.delete(`http://localhost:8000/clubs/${club.id}`);

				if(!response.data) {
					throw new Error();
				}

				return response.data;
			} catch (e) {

			}
		}
)