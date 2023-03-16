import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Modal = {
    active: boolean
}

const initialState: Modal = {
    active: false
}
const ModalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setActive(state, action: PayloadAction<boolean>) {
            state.active = action.payload
            console.log("lol")
        }
    }
}) 

export const { setActive } = ModalSlice.actions
export default ModalSlice.reducer