import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {adminService} from "./adminService"

const initialState = {
    
    signIn: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        errorMessage: null,
        data: null
    },
    addOrganization: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        errorMessage: null,
        data: null
    },
    organizations: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        errorMessage: null,
        data: null
    },
    deleteOrganization: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        errorMessage: null,
        data: null
    },
    updateOrganization: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        errorMessage: null,
        data: null
    },
    organizationsOffer: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        errorMessage: null,
        data: null
    },
    organizationOfferAnswer:{
        isLoading: false,
        isSuccess: false,
        isError: false,
        errorMessage: null,
        data: null
    },
    addEvent:{
        isLoading: false,
        isSuccess: false,
        isError: false,
        errorMessage: null,
        data: null
    },
    events:{
        isLoading: false,
        isSuccess: false,
        isError: false,
        errorMessage: null,
        data: null
    },
    volunteers:{
        isLoading: false,
        isSuccess: false,
        isError: false,
        errorMessage: null,
        data: null
    },
    volunteersProcess:{
        isLoading: false,
        isSuccess: false,
        isError: false,
        errorMessage: null,
        data: null
    }
}

export const signIn = createAsyncThunk("admin/login", async (data, thunkAPI) => {
    try {
        return await adminService.signIn(data)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.error.message)
        return thunkAPI.rejectWithValue(message)
    }
})

export const addOrganization = createAsyncThunk("add/organization", async (data, thunkAPI) => {
    try {
        return await adminService.addOrganization(data)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.error.message)
        return thunkAPI.rejectWithValue(message)
    }
})

export const getAllFunders = createAsyncThunk("get/all/funders", async (_, thunkAPI) => {
    try {
        return await adminService.getAllFunders()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.error.message)
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteCurrentOrganization = createAsyncThunk("delete/current/organization", async (data, thunkAPI) => {
    try {
        return await adminService.deleteOrganization(data)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.error.message)
        return thunkAPI.rejectWithValue(message)
    }
})

export const updateOrganization = createAsyncThunk("update/current/organization", async (data, thunkAPI) => {
    try {
        return await adminService.updateOrganization(data)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.error.message)
        return thunkAPI.rejectWithValue(message)
    }
})

export const getOrganizationsOffer = createAsyncThunk("get/organizations/offer", async (data, thunkAPI) => {
    try {
        return await adminService.getOrganizationOffer()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.error.message)
        return thunkAPI.rejectWithValue(message)
    }
})

export const refusedOrganizationOffer = createAsyncThunk("organization/offer/refused",async(data,thunkAPI)=>{
    try {
        return await adminService.refusedOrganizationOffer(data,thunkAPI)
    }catch (error){
        const message = (error.response && error.response.data && error.response.data.error.message)
        return thunkAPI.rejectWithValue(message)
    }
})

export const confirmOrganizationOffer = createAsyncThunk("organization/offer/confirm",async (data,thunkAPI)=>{
    try {
        return await adminService.confirmOrganizationOffer(data)
    }catch (error){
        const message = (error.response && error.response.data && error.response.data.error.message)
        return thunkAPI.rejectWithValue(message)
    }
})

export const addNewEvent = createAsyncThunk("add/event",async (data,thunkAPI)=>{
    try {
        return await adminService.addEvent(data)
    }catch (error){
        const message = (error.response && error.response.data && error.response.data.error.message)
        return thunkAPI.rejectWithValue(message)
    }
})

export const getAllEvents = createAsyncThunk("get/all/events",async(data,thunkAPI)=>{
    try {
        return await adminService.getEvents()
    }catch (error){
        const message = (error.response && error.response.data && error.response.data.error.message)
        return thunkAPI.rejectWithValue(message)
    }
})

export const removeEvent = createAsyncThunk("delete/current/event",async (data,thunkAPI)=>{
    try {
        return await adminService.removeEvent(data)
    }catch (error){
        const message = (error.response && error.response.data && error.response.data.error.message)
        return thunkAPI.rejectWithValue(message)
    }
})

export const getAllVolunteers = createAsyncThunk("get/volunteers",async (_,thunkAPI)=>{
    try {
        return await adminService.getAllVolunteers()
    }catch (error){
        const message = (error.response && error.response.data && error.response.data.error.message)
        return thunkAPI.rejectWithValue(message)
    }
})

export const removeVolunteer = createAsyncThunk("delete/volunteer",async (data,thunkAPI)=>{
    try {
       return  await adminService.removeVolunteer(data)
    }catch (error){
        const message = (error.response && error.response.data && error.response.data.error.message)
        return thunkAPI.rejectWithValue(message)
    }
})

export const getAdminDetails = createAsyncThunk("get/admin/details",async (data,thunkAPI)=>{
    try {
        return await adminService.getAdmin()
    }catch (error){
        const message = (error.response && error.response.data && error.response.data.error.message)
        return thunkAPI.rejectWithValue(message)
    }
})

export const updateVolunteer = createAsyncThunk("update/volunteer",async (data,thunkAPI)=>{
    try {
        return await adminService.updateVolunteer(data)
    }catch (error){
        const message = (error.response && error.response.data && error.response.data.error.message)
        return thunkAPI.rejectWithValue(message)
    }
})

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        reset: (state, action) => {
            state[action.payload].isLoading = false
            state[action.payload].isSuccess = false
  .          state[action.payload].isError = false
            state[action.payload].errorMessage = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signIn.pending, (state) => {
                state.signIn.isLoading = true
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.signIn.isLoading = false
                state.signIn.isSuccess = true
                state.signIn.errorMessage = null
                state.signIn.data = action.payload
                sessionStorage.setItem("accessToken", action.payload.data.result.token)
            })
            .addCase(signIn.rejected, (state, action) => {
                state.signIn.isLoading = false
                state.signIn.isSuccess = false
                state.signIn.isError = true
                state.signIn.errorMessage = action.payload
            })

            .addCase(addOrganization.pending, (state) => {
                state.addOrganization.isLoading = true
            })
            .addCase(addOrganization.fulfilled, (state, action) => {
                state.addOrganization.isLoading = false
                state.addOrganization.isSuccess = true
                state.addOrganization.errorMessage = null
                state.addOrganization.data = action.payload
            })
            .addCase(addOrganization.rejected, (state, action) => {
                state.addOrganization.isLoading = false
                state.addOrganization.isSuccess = false
                state.addOrganization.isError = true
                state.addOrganization.errorMessage = action.payload
            })

            .addCase(getAllFunders.pending, (state) => {
                state.organizations.isLoading = true
            })
            .addCase(getAllFunders.fulfilled, (state, action) => {
                state.organizations.isLoading = false
                state.organizations.isSuccess = true
                state.organizations.errorMessage = null
                state.organizations.data = action.payload
            })
            .addCase(getAllFunders.rejected, (state, action) => {
                state.organizations.isLoading = false
                state.organizations.isSuccess = false
                state.organizations.isError = true
                state.organizations.errorMessage = action.payload
            })

            .addCase(deleteCurrentOrganization.pending, (state) => {
                state.deleteOrganization.isLoading = true
            })
            .addCase(deleteCurrentOrganization.fulfilled, (state, action) => {
                state.deleteOrganization.isLoading = false
                state.deleteOrganization.isSuccess = true
                state.deleteOrganization.isError = false
                state.deleteOrganization.data = action.payload
            })
            .addCase(deleteCurrentOrganization.rejected, (state, action) => {
                state.deleteOrganization.isLoading = false
                state.deleteOrganization.isSuccess = false
                state.deleteOrganization.isError = true
                state.deleteOrganization.data = action.payload
            })

            .addCase(updateOrganization.pending, (state) => {
                state.deleteOrganization.isLoading = true
            })
            .addCase(updateOrganization.fulfilled, (state, action) => {
                state.deleteOrganization.isLoading = false
                state.deleteOrganization.isSuccess = true
                state.deleteOrganization.isError = false
                state.deleteOrganization.data = action.payload
            })
            .addCase(updateOrganization.rejected, (state, action) => {
                state.deleteOrganization.isLoading = false
                state.deleteOrganization.isSuccess = false
                state.deleteOrganization.isError = true
                state.deleteOrganization.data = action.payload
            })

            .addCase(getOrganizationsOffer.pending, (state) => {
                state.organizationsOffer.isLoading = true
            })
            .addCase(getOrganizationsOffer.fulfilled, (state, action) => {
                state.organizationsOffer.isLoading = false
                state.organizationsOffer.isSuccess = true
                state.organizationsOffer.isError = false
                state.organizationsOffer.data = action.payload
            })
            .addCase(getOrganizationsOffer.rejected, (state, action) => {
                state.organizationsOffer.isLoading = false
                state.organizationsOffer.isSuccess = false
                state.organizationsOffer.isError = true
                state.organizationsOffer.data = action.payload
            })

            .addCase(refusedOrganizationOffer.pending,(state)=>{
                state.organizationOfferAnswer.isLoading = true
            })
            .addCase(refusedOrganizationOffer.fulfilled, (state, action) => {
                state.organizationOfferAnswer.isLoading = false
                state.organizationOfferAnswer.isSuccess = true
                state.organizationOfferAnswer.isError = false
                state.organizationOfferAnswer.data = action.payload
            })
            .addCase(refusedOrganizationOffer.rejected, (state, action) => {
                state.organizationOfferAnswer.isLoading = false
                state.organizationOfferAnswer.isSuccess = false
                state.organizationOfferAnswer.isError = true
                state.organizationOfferAnswer.data = action.payload
            })

            .addCase(confirmOrganizationOffer.pending,(state)=>{
                state.organizationOfferAnswer.isLoading = true
            })
            .addCase(confirmOrganizationOffer.fulfilled, (state, action) => {
                state.organizationOfferAnswer.isLoading = false
                state.organizationOfferAnswer.isSuccess = true
                state.organizationOfferAnswer.isError = false
                state.organizationOfferAnswer.data = action.payload
            })
            .addCase(confirmOrganizationOffer.rejected, (state, action) => {
                state.organizationOfferAnswer.isLoading = false
                state.organizationOfferAnswer.isSuccess = false
                state.organizationOfferAnswer.isError = true
                state.organizationOfferAnswer.data = action.payload
            })

            .addCase(addNewEvent.pending,(state)=>{
                state.addEvent.isLoading = true
            })
            .addCase(addNewEvent.fulfilled, (state, action) => {
                state.addEvent.isLoading = false
                state.addEvent.isSuccess = true
                state.addEvent.isError = false
                state.addEvent.data = action.payload
            })
            .addCase(addNewEvent.rejected, (state, action) => {
                state.addEvent.isLoading = false
                state.addEvent.isSuccess = false
                state.addEvent.isError = true
                state.addEvent.data = action.payload
            })

            .addCase(getAllEvents.pending,(state,action)=>{
                state.events.isLoading = true
            })
            .addCase(getAllEvents.fulfilled, (state, action) => {
                state.events.isLoading = false
                state.events.isSuccess = true
                state.events.isError = false
                state.events.data = action.payload
            })
            .addCase(getAllEvents.rejected, (state, action) => {
                state.events.isLoading = false
                state.events.isSuccess = false
                state.events.isError = true
                state.events.data = action.payload
            })

            .addCase(removeEvent.pending,(state)=>{
                state.addEvent.isLoading = true
            })
            .addCase(removeEvent.fulfilled, (state, action) => {
                state.addEvent.isLoading = false
                state.addEvent.isSuccess = true
                state.addEvent.isError = false
                state.addEvent.data = action.payload
            })
            .addCase(removeEvent.rejected, (state, action) => {
                state.addEvent.isLoading = false
                state.addEvent.isSuccess = false
                state.addEvent.isError = true
                state.addEvent.data = action.payload
            })

            .addCase(getAllVolunteers.pending,(state)=>{
                state.volunteers.isLoading = true
            })
            .addCase(getAllVolunteers.fulfilled, (state, action) => {
                state.volunteers.isLoading = false
                state.volunteers.isSuccess = true
                state.volunteers.isError = false
                state.volunteers.data = action.payload
            })
            .addCase(getAllVolunteers.rejected, (state, action) => {
                state.volunteers.isLoading = false
                state.volunteers.isSuccess = false
                state.volunteers.isError = true
                state.volunteers.data = action.payload
            })

            .addCase(removeVolunteer.pending,(state)=>{
                state.volunteersProcess.isLoading = true
            })
            .addCase(removeVolunteer.fulfilled, (state, action) => {
                state.volunteersProcess.isLoading = false
                state.volunteersProcess.isSuccess = true
                state.volunteersProcess.isError = false
                state.volunteersProcess.data = action.payload
            })
            .addCase(removeVolunteer.rejected, (state, action) => {
                state.volunteersProcess.isLoading = false
                state.volunteersProcess.isSuccess = false
                state.volunteersProcess.isError = true
                state.volunteersProcess.data = action.payload
            })

            .addCase(updateVolunteer.pending,(state)=>{
                state.volunteersProcess.isLoading = true
            })
            .addCase(updateVolunteer.fulfilled, (state, action) => {
                state.volunteersProcess.isLoading = false
                state.volunteersProcess.isSuccess = true
                state.volunteersProcess.isError = false
                state.volunteersProcess.data = action.payload
            })
            .addCase(updateVolunteer.rejected, (state, action) => {
                state.volunteersProcess.isLoading = false
                state.volunteersProcess.isSuccess = false
                state.volunteersProcess.isError = true
                state.volunteersProcess.data = action.payload
            })

            .addCase(getAdminDetails.pending,(state)=>{
                state.signIn.isLoading = true
            })
            .addCase(getAdminDetails.fulfilled, (state, action) => {
                state.signIn.isLoading = false
                state.signIn.isSuccess = true
                state.signIn.isError = false
                state.signIn.data = action.payload
            })
            .addCase(getAdminDetails.rejected, (state, action) => {
                state.signIn.isLoading = false
                state.signIn.isSuccess = false
                state.signIn.isError = true
                state.signIn.data = action.payload
            })
    }
})

export const {reset} = adminSlice.actions
export default adminSlice.reducer