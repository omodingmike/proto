import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'

export type User = {
    id: string
    name:string
    email: string
    password: string
    role?: string
}
export type UserResponse = {
    status: number
    message: string
    data: User
}


export interface userState {
    user: User | null,
}

export const getFromLocalStorage = (key: string) => {
    const data = localStorage.getItem(key)
    if (data) {
        return JSON.parse(data)
    }
    return null
}

const initialState: userState = {
    user: getFromLocalStorage("user"),
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            localStorage.setItem("user", JSON.stringify(action.payload))
            state.user = action.payload
        },

        setLogOut: () => {
            localStorage.removeItem("user")
        },
    },
})

// Action creators are generated for each case reducer function
export const {setUser, setLogOut} = userSlice.actions

export default userSlice.reducer
