import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Club} from "src/entities/Club/model/types/club";

export const updateClub = createAsyncThunk<Club[], Club>(
		'updateClub',
		async (club, thunkAPI) => {
			try {
				const response: Club[] = await axios.patch(`http://localhost:8000/clubs/${club.id}`, club);

				if(!response.data) {
					throw new Error();
				}

				return response.data;
			} catch (e) {

			}
		}
)