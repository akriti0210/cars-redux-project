import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'form',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        addData(state, action) {
            // action.payload === {name:'guyg',cost:45}
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        removeData(state, action) {
            // action.payload === car id needs to be removed
            const updated = state.data.filter((car) => {
                return car.id !== action.payload
            })
            state.data = updated
        }
    }
})

export const { changeSearchTerm, addData, removeData } = carsSlice.actions
export const carsReducer = carsSlice.reducer