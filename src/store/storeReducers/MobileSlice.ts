import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MobileState {
    isMobile: boolean
}

const initialState:MobileState = {
    isMobile: true
}

export const mobileSlice = createSlice({
    name: "mobile",
    initialState,
    reducers: {
        setIsMobileStatus(state: MobileState, action: PayloadAction<boolean>) {
            state.isMobile = action.payload;
        }
    }
});

export default mobileSlice.reducer;