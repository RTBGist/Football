import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Club} from "src/entities/Club/model/types/club";

export const getClubById = createAsyncThunk<Club, string>(
		'getClubById',
		async (id, thunkAPI) => {
			try {
				const response = await axios.get(`http://localhost:8000/clubs/${id}`);

				if(!response.data) {
					throw new Error();
				}

				return response.data;
			} catch (e) {

			}
		}
)