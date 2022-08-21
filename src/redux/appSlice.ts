import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { IIpApiReponseInterface } from '../assets/IpApiResponseInterface';
import axios from 'axios';
import { URLS } from '../assets/DefaultUrls';
import { stat } from 'fs';

interface AppState {
    urlToCheck: string;
    isError: boolean,
    errorMessage: string;
    apiData: IIpApiReponseInterface | null

}

// Define the initial state using that type
const initialState: AppState = {
    urlToCheck: '',
    isError: false,
    errorMessage: "",
    apiData: null

}

export const axiosCallToApi = createAsyncThunk(
    'app/axiosCallToApi',
    async (data: string) => {
        // check if data is an ip adress if not get domain name
        const response = await axios.get<IIpApiReponseInterface>(URLS.apiUrl(data))
        return response.data
    }
)

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        checkUrl: (state, action: PayloadAction<string>) => {
            state.urlToCheck = action.payload
        },
        closeError: (state) => {
            state.isError = false;
            state.errorMessage = ""
        },
        setError: (state) => {
            const regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?|^((http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/
            regex.test(state.urlToCheck) ? state.isError = false : state.isError = true
            state.errorMessage = "Please insert url or ip adress into input field"
        }
    },
    extraReducers: (builder) => {
        builder.addCase(axiosCallToApi.fulfilled, (state, action) => {
            state.apiData = action.payload
        })
    },
})


export const { checkUrl, setError, closeError} = appSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.appSlice

export default appSlice.reducer