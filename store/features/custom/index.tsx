import { createSlice } from '@reduxjs/toolkit'


const initialState : any = {
    value: ''
}


export const customSlice = createSlice({
    name: 'custom',
    initialState: initialState,
    reducers: {
        setValueState: (state, action) => {
            state.value = action.payload.value
            console.log('reduce setValue.')
        }
    }
})

export const { setValueState } = customSlice.actions

export default customSlice.reducer
