import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import {contentService} from "./contentService";

const initialState = {
    events:{
        isLoading: false,
        isSuccess: false,
        isError: false,
        errorMessage: null,
        data: null
    },
    eventApply:{
        isLoading: false,
        isSuccess: false,
        isError: false,
        errorMessage: null,
        data: null
    },
    offerOfOrg:{
        isLoading: false,
        isSuccess: false,
        isError: false,
        errorMessage: null,
        data: null
    },
    volunteerApply:{
        isLoading: false,
        isSuccess: false,
        isError: false,
        errorMessage: null,
        data: null
    }
}

export const getEvents = createAsyncThunk("get/all/events",async(_,thunkAPI)=>{
    try {
        return await contentService.getEvents()
    }catch (error){
        const message = (error.response && error.response.data && error.response.data.error.message)
        return thunkAPI.rejectWithValue(message)
    }
})

export const applyAnEvent = createAsyncThunk("user/apply/event",async(data,thunkAPI)=>{
    try {
        return await contentService.applyAnEvent(data)
    }catch (error){
        const message = (error.response && error.response.data && error.response.data.error.message)
        return thunkAPI.rejectWithValue(message)
    }
})

export const organizationOffer = createAsyncThunk("organization/offer",async(data,thunkAPI)=>{
    try {
        return await contentService.organizationOffer(data)
    }catch (error){
        const message = (error.response && error.response.data && error.response.data.error.message)
        return thunkAPI.rejectWithValue(message)
    }
})

export const volunteerApply = createAsyncThunk("volunteer/apply",async(data,thunkAPI)=>{
    try {
        return await contentService.volunteerApply(data)
    }catch (error){
        const message = (error.response && error.response.data && error.response.data.error.message)
        return thunkAPI.rejectWithValue(message)
    }
})

const contentSlice = createSlice({
    name:"content",
    initialState,
    reducers: {
        resetContent: (state, action) => {
            state[action.payload].isLoading = false
            state[action.payload].isSuccess = false
            state[action.payload].isError = false
            state[action.payload].errorMessage = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getEvents.pending,(state)=>{
                state.events.isLoading = true
            })
            .addCase(getEvents.fulfilled,(state,action)=>{
                state.events.isLoading = false
                state.events.isSuccess = true
                state.events.isError = false
                state.events.errorMessage = null
                state.events.data = action.payload
            })
            .addCase(getEvents.rejected,(state,action)=>{
                state.events.isLoading = false
                state.events.isSuccess = false
                state.events.isError = true
                state.events.errorMessage = action.payload
            })

            .addCase(applyAnEvent.pending,(state)=>{
                state.eventApply.isLoading = true
            })
            .addCase(applyAnEvent.fulfilled,(state,action)=>{
                state.eventApply.isLoading = false
                state.eventApply.isSuccess = true
                state.eventApply.isError = false
                state.eventApply.errorMessage = null
                state.eventApply.data = action.payload
            })
            .addCase(applyAnEvent.rejected,(state,action)=>{
                state.eventApply.isLoading = false
                state.eventApply.isSuccess = false
                state.eventApply.isError = true
                state.eventApply.errorMessage = action.payload
            })

            .addCase(organizationOffer.pending,(state)=>{
                state.offerOfOrg.isLoading = true
            })
            .addCase(organizationOffer.fulfilled,(state,action)=>{
                state.offerOfOrg.isLoading = false
                state.offerOfOrg.isSuccess = true
                state.offerOfOrg.isError = false
                state.offerOfOrg.errorMessage = null
                state.offerOfOrg.data = action.payload
            })
            .addCase(organizationOffer.rejected,(state,action)=>{
                state.offerOfOrg.isLoading = false
                state.offerOfOrg.isSuccess = false
                state.offerOfOrg.isError = true
                state.offerOfOrg.errorMessage = action.payload
            })

            .addCase(volunteerApply.pending,(state)=>{
                state.volunteerApply.isLoading = true
            })
            .addCase(volunteerApply.fulfilled,(state,action)=>{
                state.volunteerApply.isLoading = false
                state.volunteerApply.isSuccess = true
                state.volunteerApply.isError = false
                state.volunteerApply.errorMessage = null
                state.volunteerApply.data = action.payload
            })
            .addCase(volunteerApply.rejected,(state,action)=>{
                state.volunteerApply.isLoading = false
                state.volunteerApply.isSuccess = false
                state.volunteerApply.isError = true
                state.volunteerApply.errorMessage = action.payload
            })
    }
})

export const {resetContent} = contentSlice.actions
export default contentSlice.reducer